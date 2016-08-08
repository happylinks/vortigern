export const GITHUB_GISTS_REQUEST: string = 'GITHUB_GISTS_REQUEST';
export const GITHUB_GISTS_SUCCESS: string = 'GITHUB_GISTS_SUCCESS';
export const GITHUB_GISTS_FAILURE: string = 'GITHUB_GISTS_FAILURE';

export function githubGistsRequest(options: any) {
  return {
    type: GITHUB_GISTS_REQUEST,
    username: options.username,
  };
}

export function githubGistsSuccess(gists) {
  return {
    type: GITHUB_GISTS_SUCCESS,
    gists,
  };
}

export function githubGistsFailure(message: any) {
  return {
    type: GITHUB_GISTS_FAILURE,
    message,
  };
}
