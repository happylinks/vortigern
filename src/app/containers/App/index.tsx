const appConfig = require('../../../../config/main');
import * as React from 'react';
const Helmet = require('react-helmet');
import { Header } from '../../components';

class App extends React.Component<any, any> {
  public render() {
    const s = require('./style.css');

    return (
      <section className={s.appContainer}>
        <Helmet {...appConfig.app} {...appConfig.app.head} />
        <Header />
        {this.props.children}
      </section>
    );
  }
}

export { App }
