import { useRef } from "react";
import { createPortal } from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { CSSTransition } from "react-transition-group";

import { RootState } from "../redux-states/store";
import { setModalOpen } from "../redux-states/uiSlice";

export default function Modal() {
  const dispatch = useDispatch();
  const modal = useSelector((state: RootState) => state.ui.modal);
  const modalRoot = document.getElementById("modal-root");

  const modalRef = useRef(null);
  const dialogRef = useRef(null);

  if (!modalRoot) return null; // Ensure modalRoot exists before proceeding

  const closeModal = () => {
    dispatch(setModalOpen(false));
  };

  return createPortal(
    <CSSTransition
      nodeRef={modalRef}
      in={modal.open}
      timeout={1000}
      classNames="modal-container"
      unmountOnExit
      appear
    >
      <div
        ref={modalRef}
        className="modal-container"
        role="dialog"
        aria-modal="true"
        onClick={closeModal}
      >
        {/* Dialog */}
        <CSSTransition
          nodeRef={dialogRef}
          in={modal.open}
          timeout={1000}
          unmountOnExit
          classNames="modal-dialog"
          appear
        >
          <div
            ref={dialogRef}
            className={`modal-dialog modal-dialog-mobile-style ${modal.marginTop} ${modal.width} ${modal.extraStyles}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close-btn"
              onClick={closeModal}
              aria-label="Close modal"
            >
              &times;
            </button>
            <div className="modal-content">{modal.content}</div>
          </div>
        </CSSTransition>
      </div>
    </CSSTransition>,
    modalRoot
  );
}
