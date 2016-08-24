import * as React from 'react';
const Helmet = require('react-helmet');
const classnames = require('classnames');

const appConfig = require('../../../../config/main');
import Header from '../../containers/Header';

const App = (props) => {
  const s = require('./style.css');

  return (
    <div className="appWrapper">
      <Helmet {...appConfig.app} {...appConfig.app.head} />
      <Header />
      <section className={classnames(['ui center aligned container', s.appContainer])}>
        {props.children}
      </section>
    </div>
  );
};

export default App;
