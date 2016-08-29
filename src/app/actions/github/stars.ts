export const GITHUB_STARS_REQUEST: string = 'GITHUB_STARS_REQUEST';
export const GITHUB_STARS_SUCCESS: string = 'GITHUB_STARS_SUCCESS';
export const GITHUB_STARS_FAILURE: string = 'GITHUB_STARS_FAILURE';

export function githubStarsRequest(options?: any) {
  return {
    type: GITHUB_STARS_REQUEST,
    payload: {
      repo: options.repo,
    },
  };
}

export function githubStarsSuccess(count: number) {
  return {
    type: GITHUB_STARS_SUCCESS,
    payload: {
      count,
    },
  };
}

export function githubStarsFailure(message: any) {
  return {
    type: GITHUB_STARS_FAILURE,
    error: true,
    payload: new Error(message),
  };
}
