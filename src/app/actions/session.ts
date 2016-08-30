export const UPDATE_SESSION: string = 'UPDATE_SESSION';

export function updateSession(user: any) {
  return {
    type: UPDATE_SESSION,
    payload: user,
  };
}
