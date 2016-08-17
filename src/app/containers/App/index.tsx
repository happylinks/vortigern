const appConfig = require('../../../../config/main');
import * as React from 'react';
const Helmet = require('react-helmet');
import { Header } from '../../components';

class App extends React.Component<any, any> {
  public render() {
    const s = require('./style.css');

    return (
      <div>
        <Helmet {...appConfig.app} {...appConfig.app.head} />
        <Header />
        <section className={classnames(['ui center aligned container', s.appContainer])}>
          {this.props.children}
        </section>
      </div>
    );
  }
}

export { App }
