import * as React from 'react';
const ReactModal = require('react-modal');

interface IState {
  modalIsOpen: boolean;
}

interface IProps {
  title: string;
  isOpen: boolean;
  closeModal: any;
}

class Modal extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: this.props.isOpen,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  private openModal() {
    this.setState({ modalIsOpen: true });
  }

  private closeModal() {
    this.setState({ modalIsOpen: false });
  }

  public render() {
    const { modalIsOpen } = this.state;
    const { title } = this.props;

    return (
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={this.closeModal}
        className="ui modal active"
        overlayClassName="ui dimmer modals transition visible active"
      >
        <i className="close icon" onClick={this.closeModal}></i>
        <div className="header">
          {title}
        </div>
        <div className="image content">
          <div className="image">
            An image can appear on left or an icon
          </div>
          <div className="description">
            A description can appear on the right
          </div>
        </div>
        <div className="actions">
          <div className="ui button" onClick={this.closeModal}>Cancel</div>
          <div className="ui button">OK</div>
        </div>
      </ReactModal>
    );
  }
}
export { Modal }
