import { HamburgerIcon } from "../assets/icons";
import { AppDispatch, RootState } from "../redux-states/store";
import { useDispatch, useSelector } from "react-redux";
import Menu from "./Menu";
import { useState } from "react";
import { setModalOpen, toggleModalOpen } from "../redux-states/uiSlice";

export default function OpenProfileBtn() {
  const dispatch: AppDispatch = useDispatch();
  const [openProfile, setOpenProfile] = useState(false);
  const modal = useSelector((state: RootState) => state.ui.modal);

  const handleClickOutside = (event: MouseEvent) => {
    const profileBtn = document.querySelector(".profile-btn");
    const menu = document.querySelector(".menu");

    if (
      profileBtn &&
      !profileBtn.contains(event.target as Node) &&
      menu &&
      !menu.contains(event.target as Node)
    ) {
      setOpenProfile(false);
    }
  };

  document.addEventListener("click", handleClickOutside);

  const handleResize = () => {
    setOpenProfile(false);
    dispatch(setModalOpen(false));
  };

  const handleClick = () => {
    // const browserWidth = window.innerWidth;

    // if (browserWidth <= 480) {
    //   dispatch(toggleModalOpen());
    // } else {
    //   setOpenProfile(!openProfile);
    // }
    dispatch(toggleModalOpen());

    setOpenProfile(!openProfile);

    // window.addEventListener("resize", handleResize);
  };

  return (
    <>
      <button onClick={handleClick} className="profile-btn">
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
