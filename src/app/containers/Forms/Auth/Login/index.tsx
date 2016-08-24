import * as React from 'react';
const { connect } = require('react-redux');
const { Field, Form, Errors } = require('react-redux-form');

import { isRequired } from '../../../../helpers/formValidators';

interface IProps {
  handleSubmit: any;
  authLogin?: any;
}

@connect(
  state => ({ authLogin: state.authLogin })
)
class LoginForm extends React.Component<IProps, {}> {
  public render() {
    const { handleSubmit, authLogin } = this.props;

    let error;
    if (authLogin.error) {
      error = <div className="ui negative message">{authLogin.message}</div>;
    }

    return (
      <Form model="forms.authLogin" onSubmit={(data) => handleSubmit(data)} className="ui form">
        {error}
        <Field model="forms.authLogin.username" updateOn="blur" validators={{ isRequired }}>
          <div className="field">
            <label>Username:</label>
            <input type="text" />
          </div>
          <Errors
            show={(field) => field.touched && !field.focus}
            model="forms.authLogin.username"
            messages={{
              isRequired: 'Please provide a username.',
            }}
          />
        </Field>

        <Field model="forms.authLogin.password" updateOn="blur" validators={{ isRequired }}>
          <div className="field">
            <label>Password:</label>
            <input type="password" />
          </div>
          <Errors
            show={(field) => field.touched && !field.focus}
            model="forms.authLogin.password"
            messages={{
              isRequired: 'Please provide a password.',
            }}
          />
        </Field>
        <br/>

        <button type="submit" className="ui primary button">Login</button>
      </Form>
    );
  }
}

export default LoginForm;
