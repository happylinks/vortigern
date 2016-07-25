import { takeEvery, takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { IStars, IStarsAction, IGetStarsOptions } from './stars.model';

/** Action Types */
export const STARS_REQUEST: string = 'STARS_REQUEST';
export const STARS_SUCCESS: string = 'STARS_SUCCESS';
export const STARS_FAILURE: string = 'STARS_FAILURE';

/** Initial State */
const initialState: IStars = {
  isFetching: false,
  repo: 'barbar/vortigern',
};

/** Reducer */
export function starsReducer(state = initialState, action: IStarsAction) {

  switch (action.type) {
    case STARS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });

    case STARS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        count: action.count,
      });

    case STARS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: true,
        message: action.message,
      });

    default:
      return state;
  }
}

export function* getStars(options?: any): IterableIterator<any> {
  try {
    const res = yield call(fetch, `https://api.github.com/repos/${options.repo}`);
    if (res.ok) {
      const data = yield res.json();
      yield put(starsSuccess(data.stargazers_count));
    } else {
      const data = yield res.json();
      yield put(starsFailure(data));
    }
  } catch (e) {
    yield put(starsFailure(e));
  }
}

export function* mySaga() {
  yield* takeEvery(STARS_REQUEST, getStars);
}

/** Action Creators */
export function starsRequest(options?: any): IStarsAction {
  return {
    type: STARS_REQUEST,
    repo: options ? options.repo : initialState.repo, // TODO: I don't think this is correct
  };
}

export function starsSuccess(count: number): IStarsAction {
  return {
    type: STARS_SUCCESS,
    count,
  };
}

export function starsFailure(message: any): IStarsAction {
  return {
    type: STARS_FAILURE,
    message,
  };
}
