import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "react-use-gesture";

import { RootState } from "../redux-states/store";
import { setDrawerOpen } from "../redux-states/uiSlice";
import GetView from "./GetView";

export const showDrawerCloseBtn = () => {
  return false;
};

export default function Drawer() {
  const dispatch = useDispatch();
  const drawer = useSelector((state: RootState) => state.ui.drawer);
  const drawerRoot = document.getElementById("drawer-root");

  const [isMounted, setIsMounted] = useState(false);

  const drawerElement = document.querySelector(".drawer");
  const drawerContent = document.querySelector(".drawer-content");

  const getDrawerHeight = () => {
    const drawerElementPaddingY =
      drawerElement &&
      parseFloat(getComputedStyle(drawerElement).paddingTop) +
        parseFloat(getComputedStyle(drawerElement!).paddingBottom);

    return typeof drawer.height === "number"
      ? drawer.height
      : (drawerContent &&
          drawerContent.scrollHeight + drawerElementPaddingY!) ||
          (80 * window.innerWidth) / 100;
  };

  const [{ y }, setY] = useSpring(() => ({ y: getDrawerHeight() }));
  const [{ height }, setHeight] = useSpring(() => ({
    height: getDrawerHeight(),
  }));
  const [{ opacity }, setOpacity] = useSpring(() => ({ opacity: 0 }));
  const [isAnimating, setIsAnimating] = useState(false);

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
      setIsMounted(true);
      setOpacity({
        opacity: 1,
      });
      setHeight({ height: getDrawerHeight(), immediate: true });
      setY({
        y: 0,
        onRest: () => setIsAnimating(false),
      });
    }
  }, [drawer.open, drawerElement]);

  useEffect(() => {
    if (drawer.isResized) {
      setIsAnimating(true);
      setY({
        y: height.get(),
        onRest: () => {
          setHeight({ height: getDrawerHeight(), immediate: true }),
            setY({
              y: 0,
              onRest: () => setIsAnimating(false),
            });
        },
      });
    }
  }, [drawer.isResized, drawer.height]);

  const closeDrawer = () => {
    setIsAnimating(true);
    setY({
      y: height.get(),
      onRest: () =>
        setOpacity({
          opacity: 0,
          onRest: () => finalizeClose(),
        }),
    });
  };

  const finalizeClose = () => {
    dispatch(setDrawerOpen(false));
    setIsMounted(false);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (drawer.backdropCanClose !== false) {
      if (e.target === e.currentTarget && !isAnimating) {
        closeDrawer();
      }
    }
  };

  const handleResize = () => {
    closeDrawer();
    window.removeEventListener("resize", handleResize);
  };

  window.addEventListener("resize", handleResize);

  if (!drawer.open && !isMounted && !opacity.isAnimating) return null;

  return createPortal(
    <div className="drawer-container">
      <animated.div
        className="drawer-backdrop"
        style={{ opacity }}
        onClick={handleBackdropClick}
      >
        <animated.div
          {...bind()}
          style={{
            transform: y.to((y) => `translateY(${y}px)`),
            height: height,
          }}
          className="drawer"
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
          <div className="drawer-content">
            <GetView viewName={drawer.viewName} />
          </div>
        </animated.div>
      </animated.div>
    </div>,
    drawerRoot!
  );
}
