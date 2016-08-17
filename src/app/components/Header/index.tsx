import * as React from 'react';
import { Link } from 'react-router';
const style = require('./style.less');

class Header extends React.Component<any, any> {
  public render() {

    return (
      <div>
        <div className={style.header}>
          <div className="ui inverted vertical center aligned segment masthead">
            <div className="ui container">
              <div className="ui large secondary inverted pointing menu">
                <a className="toc item">
                  <i className="sidebar icon"></i>
                </a>
                <Link className="item" to="/">Home</Link>
                <Link className="item" to="about">About</Link>
                <Link className="item" to="counter">Counter</Link>
                <Link className="item" to="stars">Stars</Link>
                <Link className="item" to="gists">Gists</Link>
                <Link className="item" to="starwars">Starwars</Link>
                <div className="right item">
                  <a className="ui inverted button">{'Log in'}</a>
                  <a className="ui inverted button">Sign Up</a>
                </div>
              </div>
            </div>
            <div className="ui text container">
              <h1 className="ui inverted header">Vortigern</h1>
              <h2>Typescript, Redux, React, Semantic UI, GraphQL.</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { Header }
