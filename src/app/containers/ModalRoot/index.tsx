import * as React from 'react';
import * as Redux from 'redux';
const { connect } = require('react-redux');

import { hideModal } from '../../actions/modal';
import { Message } from '../../components/Modals';

const MODAL_COMPONENTS = {
  MESSAGE: Message,
};

interface IProps {
  modal?: any;
  hideModal?: Redux.ActionCreator<any>;
}

@connect(
  state => ({ modal: state.modal }),
  { hideModal }
)
class ModalRoot extends React.Component<IProps, {}> {
  constructor(props) {
    super(props);

    this.hideModal = this.hideModal.bind(this);
  }
  private hideModal() {
    this.props.hideModal(this.props.modal.type);
  }
  public render() {
    const { modal } = this.props;
    const { type, props } = modal;

    if (!type) {
      return null;
    }

    const SpecificModal = MODAL_COMPONENTS[type];
    return <SpecificModal hideModal={this.hideModal} {...props} />;
  }
}

export default ModalRoot;
