import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { store } from "../redux-states/store";
import { setDrawerState, setModalState } from "../redux-states/uiSlice";
import getUserInfo from "../helpers/getUserInfo";
import { HamburgerIcon } from "./HamburgerIcon";

const OpenProfileBtn: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isUserOnboarded = false;
  const [isHandlingClick, setIsHandlingClick] = useState(false);

  const profileRoute = `/profile/${getUserInfo("walletName")}`;
  const handleClick = () => {
    if (isHandlingClick) return;

    setIsHandlingClick(true);
    const browserWidth = window.innerWidth;

    if (location.pathname === profileRoute) {
      navigate(-1); // Go back to the previous route
    } else {
      if (isUserOnboarded) {
        navigate(profileRoute);
      } else {
        const viewName = "user_welcome";

        if (browserWidth >= 480) {
          store.dispatch(
            setModalState({
              open: true,
              viewName: viewName,
              textAlign: "text-center",
              dialogStyles: "w-[400px]",
              backdropCanClose: true,
            })
          );
        } else {
          store.dispatch(
            setDrawerState({
              open: true,
              viewName: viewName,
              textAlign: "text-center",
              backdropCanClose: true,
            })
          );
        }
      }
    }

    setTimeout(() => {
      setIsHandlingClick(false);
    }, 400); // Allow 0.4 seconds for the page animation to complete
  };

  return (
    <button onClick={handleClick} className="profile-btn btn-active-scale-md">
      <span>FqWrsd</span>
      <div className="hamburger">
        <HamburgerIcon
          className="hamburger-icon"
          isProfileRoute={location.pathname === profileRoute ? true : false}
        />
      </div>
    </button>
  );
};

export default OpenProfileBtn;
