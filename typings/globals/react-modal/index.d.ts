// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/09a869c9aff51cd88250ad09b2a1b7b3cdb034d0/react-modal/react-modal.d.ts
declare module "react-modal" {
    interface ReactModal {
        isOpen: boolean;
        style?: {
            content: {
                [key: string]: any;
            },
            overlay: {
                [key: string]: any;
            }
        },
        appElement?: HTMLElement | {},
        onAfterOpen?: Function,
        onRequestClose?: Function,
        closeTimeoutMS?: number,
        ariaHideApp?: boolean,
        shouldCloseOnOverlayClick?: boolean
    }
    let ReactModal: __React.ClassicComponentClass<ReactModal>;
    export = ReactModal;
}
