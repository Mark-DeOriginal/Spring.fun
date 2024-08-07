import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import { useSpring, animated, config } from "@react-spring/web";
import { motion, AnimatePresence } from "framer-motion";

import { RootState } from "../redux-states/store";
import GetView from "../helpers/GetView";
import closeTopMenu from "../actions/closeTopMenu";
import "../styles/modal.css";
import sleep from "../helpers/sleep";
import CloseButton from "./CloseBtn";

export default function Modal() {
  const modal = useSelector((state: RootState) => state.ui.modal);
  const modalRoot = document.getElementById("modal-root");

  const [isMounted, setIsMounted] = useState(false);
  const [viewName, setViewName] = useState(modal.viewName);

  const modalDialog = useRef<HTMLDivElement>(null);
  const modalContent = useRef<HTMLDivElement>(null);

  const [{ modalOpacity }, setOpacity] = useSpring(() => ({
    modalOpacity: 0,
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
    setModalY.start({
      modalY: 50,
    });
    setOpacity.start({
      modalOpacity: 0,

      onRest: () => {
        setIsMounted(false);
        closeTopMenu();
      },
    });
  };

  const [mouseDownTarget, setMouseDownTarget] = useState<EventTarget | null>(
    null
  );
  const handleBackdropMouseDown = (e: React.MouseEvent) => {
    setMouseDownTarget(e.target);
  };
  const handleBackdropMouseUp = (e: React.MouseEvent) => {
    if (
      e.target === mouseDownTarget &&
      modal.backdropCanClose !== false &&
      e.target === e.currentTarget
    ) {
      handleClose();
    }
  };

  useEffect(() => {
    if (modal.open) {
      setViewName(modal.viewName);
      setIsMounted(true);
      sleep(0).then(() => {
        setModalHeight.start({
          modalHeight: getModalHeight(),
          immediate: true,
        });
        setOpacity.start({ modalOpacity: 1 });
        setModalY.start({ modalY: 0 });
      });
    } else {
      handleClose();
    }
  }, [modal.open]);

  useEffect(() => {
    if (modal.open) {
      setViewName(modal.viewName);
      sleep(0).then(() => {
        setModalHeight.start({
          modalHeight: getModalHeight(),
          config: { tension: 300 },
        });
      });
    }
  }, [modal.viewName, modal.renderCount]);

  if (!modalRoot || !isMounted) return null;

  return createPortal(
    <animated.div
      className="modal-container backdrop"
      style={{ opacity: modalOpacity }}
      onMouseDown={handleBackdropMouseDown}
      onMouseUp={handleBackdropMouseUp}
    >
      <animated.div
        ref={modalDialog}
        className={`modal-dialog ${modal.dialogStyles}`}
        style={{
          transform: modalY.to((y) => `translateY(${y}px)`),
          height: modalHeight,
        }}
        role="dialog"
        aria-modal="true"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <CloseButton onClick={handleClose} />

        <AnimatePresence mode="wait">
          <motion.div
            key={viewName}
            ref={modalContent}
            className={`modal-content ${
              modal.textAlign ? modal.textAlign : ""
            }`}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.3 }}
            onAnimationStart={() =>
              sleep(0).then(() => {
                setModalHeight.start({
                  modalHeight: getModalHeight(),
                  config: { tension: 300 },
                });
              })
            }
          >
            <GetView viewName={viewName} />
          </motion.div>
        </AnimatePresence>
      </animated.div>
    </animated.div>,
    modalRoot
  );
}
