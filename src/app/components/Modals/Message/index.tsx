import * as React from 'react';
const { connect } = require('react-redux');
const ReactModal = require('react-modal');

import { hideModal } from '../../../actions/modal';

interface IProps {
  title: string;
  message: string;
  hideModal: Redux.ActionCreator;
}

@connect(
  null,
  { hideModal }
)
class Message extends React.Component<IProps, {}> {
  constructor() {
    super();

    this.closeModal = this.closeModal.bind(this);
  }

  private closeModal() {
    this.props.hideModal();
  }

  public render() {
    const { title, message } = this.props;

    return (
      <ReactModal
        isOpen={true}
        onRequestClose={this.closeModal}
        className="ui modal active"
        overlayClassName="ui dimmer modals transition visible active"
      >
        <i className="close icon" onClick={this.closeModal}></i>
        <div className="header">
          {title}
        </div>
        <div className="content">
          {message}
        </div>
        <div className="actions">
          <div className="ui button" onClick={this.closeModal}>Ok</div>
        </div>
      </ReactModal>
    );
  }
}
export { Message }
