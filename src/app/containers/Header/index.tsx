import * as React from 'react';
import { Link } from 'react-router';
const { connect } = require('react-redux');

import { logoutRequest } from '../../actions/auth/logout';

const style = require('./style.less');

interface IProps {
  session?: any;
  logoutRequest?: any;
}

@connect(
  state => ({ session: state.session }),
  { logoutRequest }
)
class Header extends React.Component<IProps, {}> {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
  }

  private logout() {
    this.props.logoutRequest();
  }

  public render() {
    const { session } = this.props;

    return (
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
              { session.id ?
                <div className="right item">
                  <Link className="ui inverted button" to="dashboard">Dashboard</Link>
                  <a className="ui inverted button" onClick={this.logout}>Logout</a>
                </div>
                :
                <div className="right item">
                  <Link className="ui inverted button" to="login">Log in</Link>
                  <a className="ui inverted button">Sign Up</a>
                </div>
              }
            </div>
          </div>
          <div className="ui text container">
            <h1 className="ui inverted header">Vortigern</h1>
            <h2>Typescript, Redux, React, Semantic UI, GraphQL.</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
