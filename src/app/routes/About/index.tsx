import * as React from 'react';
import * as Redux from 'redux';
const { connect } = require('react-redux');

import { showModal } from '../../actions/modal';

interface IProps {
  showModal: Redux.ActionCreator<any>;
}

@connect(
  null,
  { showModal }
)
class About extends React.Component<IProps, {}> {
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
export default About;
