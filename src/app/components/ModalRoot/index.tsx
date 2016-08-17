import * as React from 'react';
const { connect } = require('react-redux');

import { Message } from '../Modals';

const MODAL_COMPONENTS = {
  'MESSAGE': Message,
};

interface IProps {
  modal?: any;
}

@connect(
  state => ({ modal: state.modal })
)
class ModalRoot extends React.Component<IProps, {}> {
  public render() {
    const { type, props } = this.props.modal;

    if (!type) {
      return null;
    }

    const SpecificModal = MODAL_COMPONENTS[type];
    return <SpecificModal {...props} />;
  }
}

export { ModalRoot };
