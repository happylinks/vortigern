export const GITHUB_STARS_REQUEST: string = 'GITHUB_STARS_REQUEST';
export const GITHUB_STARS_SUCCESS: string = 'GITHUB_STARS_SUCCESS';
export const GITHUB_STARS_FAILURE: string = 'GITHUB_STARS_FAILURE';

export function githubStarsRequest(options?: any) {
  return {
    type: GITHUB_STARS_REQUEST,
    repo: options.repo,
  };
}

export function githubStarsSuccess(count: number) {
  return {
    type: GITHUB_STARS_SUCCESS,
    count,
  };
}

export function githubStarsFailure(message: any) {
  return {
    type: GITHUB_STARS_FAILURE,
    message,
  };
}
