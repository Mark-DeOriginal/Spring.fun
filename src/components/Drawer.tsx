import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "react-use-gesture";

import { RootState } from "../redux-states/store";
import { setDrawerOpen } from "../redux-states/uiSlice";

export const showDrawerCloseBtn = () => {
  return false;
};

export default function Drawer() {
  const dispatch = useDispatch();
  const drawer = useSelector((state: RootState) => state.ui.drawer);
  const drawerRoot = document.getElementById("drawer-root");

  const maxHeight = drawer.height || 400;

  const [{ y }, setY] = useSpring(() => ({ y: maxHeight }));
  const [{ opacity }, setOpacity] = useSpring(() => ({ opacity: 0 }));
  const [isAnimating, setIsAnimating] = useState(false);

  const bind = useDrag(
    ({ down, movement: [, my], velocity }) => {
      const trigger = maxHeight * 0.5;
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
      setOpacity({ opacity: 1 });
      setY({ y: 0, onRest: () => setIsAnimating(false) });
    }
  }, [drawer.open, setY, setOpacity]);

  const closeDrawer = () => {
    setIsAnimating(true);
    setY({
      y: maxHeight,
      onRest: () =>
        setOpacity({
          opacity: 0,
          onRest: () => dispatch(setDrawerOpen(false)),
        }),
    });
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (drawer.backdropCanClose != false) {
      if (e.target === e.currentTarget && !isAnimating) {
        closeDrawer();
      }
    }
  };

  if (!drawer.open && !opacity.isAnimating) return null;

  return createPortal(
    <animated.div
      className="drawer-backdrop"
      style={{ opacity }}
      onClick={handleBackdropClick}
    >
      <animated.div
        {...bind()}
        style={{
          transform: y.to((y) => `translateY(${y}px)`),
          height: maxHeight,
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

        {drawer.content}
      </animated.div>
    </animated.div>,
    drawerRoot!
  );
}
