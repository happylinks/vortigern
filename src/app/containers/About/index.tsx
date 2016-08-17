import * as React from 'react';
const { connect } = require('react-redux');

import { showModal } from '../../actions/modal';

interface IState {
}

interface IProps {
  showModal: Redux.ActionCreator;
}

@connect(
  null,
  { showModal }
)
class About extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);

    this.showModal = this.showModal.bind(this);
  }

  private showModal() {
    this.props.showModal('MESSAGE', {
      title: 'OH no',
      message: 'You did something wrong, please fix it!',
      color: 'red',
      icon: 'remove',
    });
  }

  public render() {
    return (
      <div className="ui center aligned container">
        <button className="ui huge primary button" onClick={this.showModal}>Open Modal</button>
      </div>
    );
  }
}
export { About }
