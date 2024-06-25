import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import { useSpring, animated, config } from "@react-spring/web";

import { RootState } from "../redux-states/store";
import GetView from "../helpers/GetView";
import closeTopMenu from "../actions/closeTopMenu";
import "../styles/modal.css";

export default function Modal() {
  const modal = useSelector((state: RootState) => state.ui.modal);
  const modalRoot = document.getElementById("modal-root");

  const [isMounted, setIsMounted] = useState(false);

  const handleClose = () => {
    closeTopMenu();
  };

  const handleBackDropClick = () => {
    if (modal.backdropCanClose !== false) {
      handleClose();
    }
  };

  const backdropSpring = useSpring({
    opacity: modal.open ? 1 : 0,
    onRest: () => {
      if (!modal.open) {
        setIsMounted(false);
      }
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

  const handleResize = () => {
    if (modal.open) {
      handleClose();
    }
    window.removeEventListener("resize", handleResize);
  };

  window.addEventListener("resize", handleResize);

  if (!modalRoot || !isMounted) return null;

  return createPortal(
    <animated.div
      className="modal-container"
      style={backdropSpring}
      onClick={handleBackDropClick}
    >
      <animated.div
        className={`modal-dialog ${modal.dialogStyles}`}
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
        <div
          className={`modal-content ${
            modal.textAlign ? `text-${modal.textAlign}` : ""
          }`}
        >
          <GetView viewName={modal.viewName} />
        </div>
      </animated.div>
    </animated.div>,
    modalRoot
  );
}
