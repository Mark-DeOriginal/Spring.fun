import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import { RootState, store } from "../redux-states/store";
import { setModalOpen } from "../redux-states/uiSlice";

export default function Modal() {
  // Load required data from our redux store
  const modal = useSelector((state: RootState) => state.ui.modal);

  const modalRoot = document.getElementById("modal-root");

  if (!modalRoot) return null;

  const closeModal = () => {
    document.body.style.overflowY = "auto";
    store.dispatch(setModalOpen(false));
  };

  return (
    modal.open &&
    modal.show &&
    ReactDOM.createPortal(
      <div className={`modal`} role="dialog" aria-modal="true" tabIndex={-1}>
        <div className="modal-container">
          <div className="modal-backdrop" onClick={() => closeModal()}></div>
          <div
            className={`${modal.marginTop} ${modal.width} ${modal.extraStyles} modal-dialog`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close-btn"
              onClick={() => closeModal()}
              aria-label="Close modal"
            >
              &times;
            </button>
            <div className="modal-content">{modal.content}</div>
          </div>
        </div>
      </div>,
      modalRoot
    )
  );
}
