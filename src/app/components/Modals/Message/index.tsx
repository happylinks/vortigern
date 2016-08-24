import * as React from 'react';
const ReactModal = require('react-modal');

interface IProps {
  title: string;
  message: string;
  hideModal: any;
}

const Message = (props: IProps) => {
  const { title, message, hideModal } = props;

  return (
    <ReactModal
      isOpen={true}
      onRequestClose={hideModal}
      className="ui modal active"
      overlayClassName="ui dimmer modals transition visible active"
    >
      <i className="close icon" onClick={hideModal}></i>
      <div className="header">{title}</div>
      <div className="content">{message}</div>
      <div className="actions">
        <div className="ui button" onClick={hideModal}>Ok</div>
      </div>
    </ReactModal>
  );
};

export default Message;
