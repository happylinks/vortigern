import * as React from 'react';
const { connect } = require('react-redux');

import { increment, decrement, divide } from '../../actions/counter';

const s = require('./style.css');

interface IProps {
  counter: any;
  increment: Redux.ActionCreator;
  decrement: Redux.ActionCreator;
  divide: Redux.ActionCreator;
}

@connect(
  state => ({ counter: state.counter }),
  dispatch => ({
    decrement: () => dispatch(decrement()),
    increment: () => dispatch(increment()),
    divide: () => dispatch(divide()),
  })
)
class Counter extends React.Component<IProps, void> {

  public render() {
    const { increment, decrement, divide, counter } = this.props;

    return (
      <div className={s.counter}>
        <h4>Counter Example</h4>
        <button
          className="ui button"
          name="incBtn"
          onClick={increment}>
            INCREMENT
        </button>
        <button
          className="ui button"
          name="decBtn"
          onClick={decrement}
          disabled={counter.count <= 0}>
            DECREMENT
        </button>
        <button
          className="ui button"
          name="divBtn"
          onClick={divide}>
            DIVIDE
        </button>
        <p>{counter.count}</p>
      </div>
    );
  }
}

export { Counter }
