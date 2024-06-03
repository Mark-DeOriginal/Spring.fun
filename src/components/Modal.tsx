import React, { ReactNode } from "react";
import closeMenu from "../utilities/closeMenu";
import ReactDOM from "react-dom";

interface ModalProps {
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  document.body.style.overflowY = "hidden";
  const modalRoot = document.getElementById("modal-root");

  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <div className="modal" role="dialog" aria-modal="true" tabIndex={-1}>
      <div className="modal-backdrop" onClick={() => closeMenu()}></div>
      <div className="modal-wrapper" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal-close"
          onClick={() => closeMenu()}
          aria-label="Close modal"
        >
          &times;
        </button>
        <div className="modal-content">{children}</div>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
