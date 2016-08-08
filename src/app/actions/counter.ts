export const INCREMENT: string = 'INCREMENT';
export const DECREMENT: string = 'DECREMENT';
export const DIVIDE: string = 'DIVIDE';

export function increment() {
  return {
    type: INCREMENT,
  };
}

export function decrement() {
  return {
    type: DECREMENT,
  };
}

export function divide() {
  return {
    type: DIVIDE,
  };
}
