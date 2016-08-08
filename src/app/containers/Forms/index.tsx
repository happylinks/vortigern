import * as React from 'react';
import LoginForm from '../../components/Forms/Auth/Login';
// import { loginRequest } from '../../redux/modules/auth/login';
// const { connect } = require('react-redux');
const s = require('./style.css');

// @connect(
//   state => ({
//     login: state.login,
//   }),
//   { loginRequest }
// )
class Forms extends React.Component<{}, {}> {
  public render() {
    return (
      <div className={s.form}>
        <LoginForm />
      </div>
    );
  }
}

export { Forms }
