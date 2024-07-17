import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "react-use-gesture";

import { RootState } from "../redux-states/store";
import GetView from "../helpers/GetView";
import closeTopMenu from "../actions/closeTopMenu";
import "../styles/drawer.css";
import sleep from "../helpers/sleep";

export const showDrawerCloseBtn = () => {
  return false;
};

export default function Drawer() {
  const drawer = useSelector((state: RootState) => state.ui.drawer);
  const drawerRoot = document.getElementById("drawer-root");
  const [viewName, setViewName] = useState(drawer.viewName);

  const [isMounted, setIsMounted] = useState(false);

  const drawerElement = useRef<HTMLDivElement>(null);
  const drawerContent = useRef<HTMLDivElement>(null);

  const getDrawerHeight = () => {
    const drawerElementPaddingY = drawerElement.current
      ? parseFloat(getComputedStyle(drawerElement.current).paddingTop) +
        parseFloat(getComputedStyle(drawerElement.current).paddingBottom)
      : 0;

    return typeof drawer.height === "number"
      ? drawer.height
      : drawerContent.current
      ? drawerContent.current.scrollHeight + drawerElementPaddingY
      : (80 * window.innerWidth) / 100;
  };

  const [{ y }, setY] = useSpring(() => ({
    y: getDrawerHeight(),
    config: { tension: 500, friction: 50 },
  }));

  const [{ height }, setDrawerHeight] = useSpring(() => ({
    height: getDrawerHeight(),
    immediate: true,
  }));

  const [{ drawerBackdropOpacity, drawerContentOpacity }, setOpacity] =
    useSpring(() => ({
      drawerBackdropOpacity: 0,
      drawerContentOpacity: 1,
    }));

  const bind = useDrag(
    ({ down, movement: [, my], velocity }) => {
      const trigger = height.get() * 0.5;
      const closingVelocity = 20;

      if (!down) {
        if (my > trigger || velocity > closingVelocity) {
          closeDrawer();
        } else {
          setY({ y: 0 });
        }
      } else {
        setY({ y: Math.max(my, 0), immediate: down });
      }
    },
    { axis: "y" }
  );

  useEffect(() => {
    if (drawer.open) {
      setViewName(drawer.viewName);
      setIsMounted(true);
      sleep(0).then(() => {
        const calculatedHeight = getDrawerHeight();
        setDrawerHeight.start({ height: calculatedHeight, immediate: true });
        setY.start({ y: calculatedHeight, immediate: true });
        setOpacity.start({ drawerBackdropOpacity: 1 });
        setY.start({ y: 0 });
      });
    } else {
      closeDrawer();
    }
  }, [drawer.open]);

  useEffect(() => {
    let newHeight = getDrawerHeight();

    if (drawer.open) {
      setY.start({
        y: height.get(),
        onRest: () => {
          setViewName(drawer.viewName);
          sleep(0).then(() => {
            newHeight = getDrawerHeight();
            setDrawerHeight.start({
              height: newHeight,
              immediate: true,
              onRest: () => setY({ y: 0 }),
            });
          });
        },
      });
    }
  }, [drawer.viewName]);

  useEffect(() => {
    let newHeight = getDrawerHeight();

    if (drawer.open) {
      newHeight = getDrawerHeight();
      setDrawerHeight.start({
        height: newHeight,
      });
    }
  }, [drawer.renderCount]);

  const closeDrawer = () => {
    setY.start({
      y: height.get(),
      onRest: () =>
        setOpacity.start({
          drawerBackdropOpacity: 0,
          onRest: () => finalizeClose(),
        }),
    });
  };

  const finalizeClose = () => {
    setIsMounted(false);
    closeTopMenu();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (drawer.backdropCanClose !== false) {
      if (e.target === e.currentTarget) {
        closeDrawer();
      }
    }
  };

  if (!drawer.open && !isMounted) return null;

  return createPortal(
    <div className="drawer-container">
      <animated.div
        className="drawer-backdrop backdrop"
        style={{ opacity: drawerBackdropOpacity }}
        onClick={handleBackdropClick}
      >
        <animated.div
          {...bind()}
          style={{
            transform: y.to((y) => `translateY(${y}px)`),
            height: height,
          }}
          className="drawer"
          ref={drawerElement}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="drawer-handle"></div>
          {showDrawerCloseBtn() && (
            <button
              className="drawer-close-btn"
              onClick={closeDrawer}
              aria-label="Close modal"
            >
              &times;
            </button>
          )}
          <animated.div
            className={`drawer-content ${
              drawer.textAlign ? drawer.textAlign : ""
            }`}
            ref={drawerContent}
            style={{ opacity: drawerContentOpacity }}
          >
            <GetView viewName={viewName} />
          </animated.div>
        </animated.div>
      </animated.div>
    </div>,
    drawerRoot!
  );
}
