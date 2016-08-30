import * as React from 'react';
import * as Redux from 'redux';
const { connect } = require('react-redux');

import { loginRequest } from '../../actions/auth/login';
import LoginForm from '../../containers/Forms/Auth/Login';

interface IProps {
  loginRequest: Redux.ActionCreator<any>;
}

@connect(
  null,
  { loginRequest }
)
class Login extends React.Component<IProps, {}> {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  private handleSubmit(data) {
    console.log('handle submit', data);
    this.props.loginRequest(data);
  }

  public render() {
    return (
      <div className="ui center aligned container">
        <div className="ui center aligned grid">
          <div className="six wide column">
            <LoginForm handleSubmit={this.handleSubmit} />
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
