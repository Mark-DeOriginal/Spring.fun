import { HamburgerIcon } from "../assets/icons";
import { AppDispatch, RootState } from "../redux-states/store";
import { useDispatch, useSelector } from "react-redux";
import Menu from "./Menu";
import { useEffect, useState } from "react";
import { setModalShow, toggleModalOpen } from "../redux-states/uiSlice";

export default function OpenProfileBtn() {
  const dispatch: AppDispatch = useDispatch();
  const [openProfile, setOpenProfile] = useState(false);
  const modal = useSelector((state: RootState) => state.ui.modal);

  const toggleOpen = () => {
    setOpenProfile(!openProfile);
    dispatch(toggleModalOpen());
  };

  const handleClick = () => {
    toggleOpen();

    const browserWidth = window.innerWidth;

    if (browserWidth <= 480) {
      dispatch(setModalShow(true));
      document.body.style.overflowY = "hidden";
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const browserWidth = window.innerWidth;
      if (browserWidth <= 480) {
        dispatch(setModalShow(true));
        document.body.style.overflowY = "hidden";
      } else {
        dispatch(setModalShow(false));
        document.body.style.overflowY = "auto";
      }
    };
    if (modal.open) {
      window.addEventListener("resize", handleResize);
    } else {
      window.removeEventListener("resize", handleResize);
      setOpenProfile(false);
    }
  }, [modal.open]);

  const handleOutsideClick = () => {
    document.addEventListener("click", (e) => {
      const menuComponent = document.querySelector(".menu");
      const profileBtn = document.querySelector(".profile-btn");

      if (e.target !== menuComponent && e.target !== profileBtn) {
        toggleOpen();
        document.removeEventListener("click", handleOutsideClick);
      }
    });
  };

  useEffect(() => {
    if (openProfile) {
      handleOutsideClick();
    }
  }, [openProfile]);

  return (
    <>
      <button onClick={() => handleClick()} className="profile-btn">
        <span>FqWrsd</span>
        <div className="hamburger">
          <HamburgerIcon className="hamburger-icon" />
        </div>
      </button>
      {openProfile && (
        <Menu className="menu absolute right-0 top-12 w-[400px] max-tablet-md:hidden">
          {modal.content}
        </Menu>
      )}
    </>
  );
}
