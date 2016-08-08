import * as React from 'react';
import { Field, Form } from 'react-redux-form';
const { connect } = require('react-redux');
// import { loginRequest } from '../../../../redux/modules/auth/auth';
// const s = require('./style.css');

interface IProps {
}

interface IState {
  session?: {
    username: string;
    personal_access_token: string;
  };
}

@connect(
  state => ({
    session: state.session,
    auth: state.auth,
  })
  // { loginRequest }
)
class LoginForm extends React.Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      session: {
        username: '',
        personal_access_token: '',
      },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  private handleSubmit(session) {
    // const { loginRequest } = this.props;

    // loginRequest({
    //   username: session.username,
    //   personal_access_token: session.personal_access_token,
    // });
  }

  public render() {
    const { auth } = this.props;

    return (
      <Form model="session"
        onSubmit={(session) => this.handleSubmit(session)}>
        { auth.error ? `ERROR: ${auth.message.message}` : '' }
        <Field model="session.username">
          <label>Username:</label><br/>
          <input type="text" />
        </Field>

        <Field model="session.personal_access_token">
          <label>Personal Access Token:</label><br/>
          <input type="password" />
        </Field>

        <button type="submit">
          Login
        </button>
      </Form>
    );
  }
}

export default LoginForm;
