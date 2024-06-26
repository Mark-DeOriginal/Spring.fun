import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import { useSpring, animated, config } from "@react-spring/web";

import { RootState } from "../redux-states/store";
import GetView from "../helpers/GetView";
import closeTopMenu from "../actions/closeTopMenu";
import "../styles/modal.css";

export const sleep = (duration: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

export default function Modal() {
  const modal = useSelector((state: RootState) => state.ui.modal);
  const modalRoot = document.getElementById("modal-root");

  const [isMounted, setIsMounted] = useState(false);
  const [viewName, setViewName] = useState(modal.viewName);

  const modalDialog = useRef<HTMLDivElement>(null);
  const modalContent = useRef<HTMLDivElement>(null);

  const [{ opacity }, setOpacity] = useSpring(() => ({
    opacity: 0,
  }));

  const [{ modalY }, setModalY] = useSpring(() => ({
    modalY: 50,
    config: config.wobbly,
  }));

  const getModalHeight = () => {
    const modalDialogPaddingY = modalDialog.current
      ? parseFloat(getComputedStyle(modalDialog.current).paddingTop) +
        parseFloat(getComputedStyle(modalDialog.current).paddingBottom)
      : 0;

    return modalContent.current
      ? modalContent.current.scrollHeight + modalDialogPaddingY
      : 0;
  };

  const [{ modalHeight }, setModalHeight] = useSpring(() => ({
    modalHeight: getModalHeight(),
  }));

  const handleClose = () => {
    setModalY({
      modalY: 50,
    });
    setOpacity({
      opacity: 0,

      onRest: () => {
        setIsMounted(false);
        closeTopMenu();
      },
    });
  };

  const handleBackDropClick = (e: React.MouseEvent) => {
    if (modal.backdropCanClose !== false && e.target === e.currentTarget) {
      handleClose();
    }
  };

  useEffect(() => {
    if (modal.open) {
      setViewName(modal.viewName);
      setIsMounted(true);
      sleep(0).then(() => {
        setModalHeight({ modalHeight: getModalHeight(), immediate: true });
        setOpacity({ opacity: 1 });
        setModalY({ modalY: 0 });
      });
    } else {
      handleClose();
    }
  }, [modal.open]);

  useEffect(() => {
    if (modal.open) {
      setViewName(modal.viewName);
      sleep(0).then(() => {
        setModalHeight({
          modalHeight: getModalHeight(),
          config: { duration: 300 },
        });
      });
    }
  }, [modal.viewName]);

  const handleResize = () => {
    handleClose();
  };

  useEffect(() => {
    if (modal.open) {
      window.addEventListener("resize", handleResize);
    } else {
      window.removeEventListener("resize", handleResize);
    }
    return () => window.removeEventListener("resize", handleResize);
  }, [modal.open]);

  if (!modalRoot || !isMounted) return null;

  return createPortal(
    <animated.div
      className="modal-container"
      style={{ opacity }}
      onClick={handleBackDropClick}
    >
      <animated.div
        ref={modalDialog}
        className={`modal-dialog ${modal.dialogStyles}`}
        style={{
          transform: modalY.to((y) => `translateY(${y}px)`),
          height: modalHeight,
          opacity,
        }}
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
          ref={modalContent}
          className={`modal-content ${modal.textAlign ? modal.textAlign : ""}`}
        >
          <GetView viewName={viewName} />
        </div>
      </animated.div>
    </animated.div>,
    modalRoot
  );
}
