import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { useSpring, animated, config } from "@react-spring/web";

import { RootState } from "../redux-states/store";
import { setModalOpen } from "../redux-states/uiSlice";

export default function Modal() {
  const dispatch = useDispatch();
  const modal = useSelector((state: RootState) => state.ui.modal);
  const modalRoot = document.getElementById("modal-root");

  const [isMounted, setIsMounted] = useState(false);

  const handleClose = () => {
    dispatch(setModalOpen(false));
  };

  const handleBackDropClick = () => {
    if (modal.backdropCanClose != false) {
      handleClose();
    }
  };

  const backDropAnimConfig = {
    tension: 210,
    friction: 20,
  };

  const backdropSpring = useSpring({
    opacity: modal.open ? 1 : 0,
    config: backDropAnimConfig,
    onRest: () => {
      if (!modal.open) setIsMounted(false);
    },
  });

  const dialogSpring = useSpring({
    opacity: modal.open ? 1 : 0,
    transform: modal.open ? "translateY(0px)" : "translateY(50px)",
    config: config.wobbly,
  });

  useEffect(() => {
    if (modal.open) {
      setIsMounted(true);
    }
  }, [modal.open]);

  if (!modalRoot || !isMounted) return null;

  return createPortal(
    <animated.div
      className="modal-container"
      style={backdropSpring}
      onClick={handleBackDropClick}
    >
      <animated.div
        className={`modal-dialog ${modal.marginTop} ${modal.width} ${modal.extraStyles}`}
        style={dialogSpring}
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close-btn"
          onClick={handleClose}
          aria-label="Close modal"
        >
          &times;
        </button>
        <div className="modal-content">{modal.content}</div>
      </animated.div>
    </animated.div>,
    modalRoot
  );
}
