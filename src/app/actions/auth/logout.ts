export const LOGOUT_REQUEST: string = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS: string = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE: string = 'LOGOUT_FAILURE';

export function logoutRequest(options: any) {
  return {
    type: LOGOUT_REQUEST,
  };
}

export function logoutSuccess() {
  return {
    type: LOGOUT_SUCCESS,
  };
}

export function logoutFailure(message: any) {
  return {
    type: LOGOUT_FAILURE,
    error: true,
    payload: new Error(message),
  };
}
