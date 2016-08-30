export const LOGIN_REQUEST: string = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS: string = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE: string = 'LOGIN_FAILURE';

export function loginRequest(options: any) {
  return {
    type: LOGIN_REQUEST,
    payload: {
      username: options.username,
      password: options.password,
      jwt: options.jwt,
    },
  };
}

export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  };
}

export function loginFailure(message: any) {
  return {
    type: LOGIN_FAILURE,
    error: true,
    payload: new Error(message),
  };
}
