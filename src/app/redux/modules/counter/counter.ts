import { ICounter, ICounterAction } from './counter.model';

/** Action Types */
export const INCREMENT: string = 'INCREMENT';
export const DECREMENT: string = 'DECREMENT';
export const DIVIDE: string = 'DIVIDE';

/** Counter: Initial State */
const initialState: ICounter = {
  count: 0,
};

/** Reducer: CounterReducer */
export function counterReducer(state = initialState, action?: ICounterAction) {

  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1,
      };

    case DECREMENT:
      return {
        count: ((state.count - 1 > 0) ? state.count - 1 : 0),
      };

    case DIVIDE:
      return {
        count: ((state.count / 2 > 0) ? state.count / 2 : 0),
      };

    default:
      return state;
  }
}

/** Action Creator: Increments the Counter */
export function increment(): ICounterAction {
  return {
    type: INCREMENT,
  };
}

/** Action Creator: Decrements the Counter */
export function decrement(): ICounterAction {
  return {
    type: DECREMENT,
  };
}

/** Action Creator: Decrements the Counter */
export function divide(): ICounterAction {
  return {
    type: DIVIDE,
  };
}
