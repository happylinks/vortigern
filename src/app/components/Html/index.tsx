import * as React from 'react';
const Helmet = require('react-helmet');

interface IHtmlProps {
  manifest?: Object;
  markup?: string;
  store?: Redux.Store;
}

const resolve = (files, props) => {
  return files.map((src) => {
    if (!props.manifest[src]) { return; }
    return '/public/' + props.manifest[src];
  }).filter((file) => file !== undefined);
};

const Html = (props: IHtmlProps) => {
  const head = Helmet.rewind();
  const { markup, store } = props;

  const styles = resolve(['vendor.css', 'app.css'], props);
  const renderStyles = styles.map((src, i) =>
    <link key={i} rel="stylesheet" type="text/css" href={src} />
  );

  const scripts = resolve(['vendor.js', 'app.js'], props);
  const renderScripts = scripts.map((src, i) =>
    <script src={src} key={i}></script>
  );

  const initialState = (
    <script
      dangerouslySetInnerHTML={{
        __html: `window.__INITIAL_STATE__=${JSON.stringify(store.getState())};`,
      }}
      charSet="UTF-8"
    />
  );

  return (
    <html>
      <head>
        {head.base.toComponent()}
        {head.title.toComponent()}
        {head.meta.toComponent()}
        {head.link.toComponent()}
        {head.script.toComponent()}

        {renderStyles}
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body>
        <main id="app" dangerouslySetInnerHTML={{ __html: markup }}></main>
        {initialState}
        {renderScripts}
      </body>
    </html>
  );
};

export default Html;
