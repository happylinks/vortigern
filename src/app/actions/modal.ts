export const SHOW_MODAL: string = 'SHOW_MODAL';
export const HIDE_MODAL: string = 'HIDE_MODAL';

export function showModal(type: string, props?: any) {
  return {
    type: SHOW_MODAL,
    payload: {
      type,
      props,
    },
  };
}

export function hideModal(type: string) {
  return {
    type: HIDE_MODAL,
    payload: {
      type,
    },
  };
}
