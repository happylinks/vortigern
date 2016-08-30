const appConfig = require('../config/main');

const e6p = require('es6-promise');
e6p.polyfill();
import 'isomorphic-fetch';

// Don't update to require.
import * as React from 'react';
import routes from './app/routes';
import rootSaga from './app/sagas';

const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const cors = require('cors');
const compression = require('compression');
const Chalk = require('chalk');
const favicon = require('serve-favicon');
const request = require('request');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const { renderToString, renderToStaticMarkup } = require('react-dom/server');
const { createMemoryHistory, match } = require('react-router');
const { syncHistoryWithStore } = require('react-router-redux');
const { loadOnServer } = require('redux-connect');

const { configureStore } = require('./app/store');
const { Html, Root } = require('./app/components');

const manifest = require('../build/manifest.json');

const testSession: any = {
  id: 1,
  first_name: 'Michiel',
  last_name: 'Westerbeek',
  username: 'michiel',
};
const validToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6Ik1pY2hpZWwiLCJsYXN0X25hbWUiOiJXZXN0ZXJiZWVrIiwidXNlcm5hbWUiOiJtaWNoaWVsIiwiaWF0IjoxNDcyMDM0MzgzfQ.3dFos6VxHN5mlBghzmvupu11sMoRDKZw7CztXlnHmKo';

const corsOptions = {
  origin: 'http://vortigern.local.com:8080',
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization', 'x-access-token'],
};

const app = express();
app.use(cookieParser());
app.use(compression());
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.set('appSecret', 'Ghg1SG-O[y{8a;>hk32D{TuZK%na84');
app.use(favicon(path.join(__dirname, '../src/favicon.ico')));
app.use('/public', express.static(path.join(__dirname, '../build/public')));

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack');
  const webpackConfig = require('../config/webpack/dev');
  const webpackCompiler = webpack(webpackConfig);

  app.use(require('webpack-dev-middleware')(webpackCompiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: { colors: true },
    noInfo: true,
    hot: true,
    inline: true,
    lazy: false,
    historyApiFallback: true,
    quiet: true,
  }));

  app.use(require('webpack-hot-middleware')(webpackCompiler));
}

/**
 * API ROUTES
 */
const apiRoutes = express.Router();
app.use('/api', apiRoutes);

apiRoutes.post('/login', (req, res) => {
  const params = req.body;
  if (params.jwt === validToken) {
    res.status(200).send(
      Object.assign({}, testSession, { token: validToken })
    );
  }
  if (params.username === 'michiel' && params.password === 'test123test123') {
    const token = jwt.sign(testSession, app.get('appSecret'));
    res.status(200).send(
      Object.assign({}, testSession, { token })
    );
  }
  res.status(400).send({
    message: 'Unsuccessful login',
  });
});

apiRoutes.post('/logout', (req, res) => {
  res.status(200).send({
    message: 'Succesful logout',
  });
});

// route middelware to verify a token
apiRoutes.use((req, res, next) => {
  // check header or url parameters or post parameters for token
  const token = req.body.token || req.query.token || req.headers['x-access-token'];

  // decode token
  if (token) {
    // verifies secret and checks exp
    jwt.verify(token, app.get('appSecret'), (err, decoded) => {
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.status(403).send({
      success: false,
      message: 'No token provided.',
    });
  }
});

apiRoutes.post('/swapi', (req, res) => {
  const url = 'http://graphql-swapi.parseapp.com/';
  req.pipe(request(url)).pipe(res);
});

apiRoutes.post('/session', (req, res) => {
  res.status(200).send(testSession);
});

/**
 * SERVER SIDE RENDERING
 */
const renderHTML = (markup, store) => {
  const html = renderToStaticMarkup(
    <Html markup={markup} manifest={manifest} store={store} />
  );
  return `${html}`;
};

app.get('*', (req, res) => {
  const location = req.url;
  const memoryHistory = createMemoryHistory(req.originalUrl);
  const store = configureStore(memoryHistory);
  const history = syncHistoryWithStore(memoryHistory, store);

  match({ history, routes, location },
    (error, redirectLocation, renderProps) => {
      if (error) {
        res.status(500).send(error.message);
      } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      } else if (renderProps) {
        const rootComp = (
          <Root
            store={store}
            routes={routes}
            history={createMemoryHistory()}
            renderProps={renderProps}
            type="server"
          />
        );

        store.runSaga(rootSaga).done.then(() => {
          const markup = renderToString(rootComp);
          const html = renderHTML(markup, store);
          res.status(200).send(html);
        });

        renderToString(rootComp);

        const asyncRenderData = Object.assign({}, renderProps, { store });

        loadOnServer(asyncRenderData).then(() => {
          store.close();
        });
      } else {
        res.status(404).send('Not Found?');
      }
    });
});

app.listen(appConfig.port, appConfig.host, err => {
  if (err) {
    console.error(Chalk.bgRed(err));
  } else {
    console.info(Chalk.black.bgGreen(
      `\n\n💂  Listening at http://${appConfig.host}:${appConfig.port}\n`
    ));
  }
});
