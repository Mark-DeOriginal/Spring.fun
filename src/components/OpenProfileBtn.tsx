import { HamburgerIcon } from "../assets/icons";
import { AppDispatch } from "../redux-states/store";
import { useDispatch } from "react-redux";
import {
  setDrawerOpen,
  setDrawerState,
  setModalOpen,
  setModalState,
} from "../redux-states/uiSlice";

export default function OpenProfileBtn() {
  const dispatch: AppDispatch = useDispatch();

  const handleResize = () => {
    // Close Drawer
    dispatch(setDrawerOpen(false));
    // Close Modal
    dispatch(setModalOpen(false));

    document.removeEventListener("resize", handleResize);
  };

  const handleClick = () => {
    const browserWidth = window.innerWidth;

    if (browserWidth <= 480) {
      // Let's use up 80% of the browser height for the Drawer
      const drawerHeight = (80 * window.innerHeight) / 100;

      dispatch(
        setDrawerState({
          open: true,
          content: "USER_PROFILE",
          height: drawerHeight,
        })
      );
    } else {
      // Open Modal
      dispatch(
        setModalState({
          open: true,
          content: "USER_PROFILE",
          width: "w-[450px]",
          marginTop: "mt-10",
          extraStyles: "h-[90vh]",
        })
      );
    }

    window.addEventListener("resize", handleResize);
  };

  return (
    <>
      <button onClick={handleClick} className="profile-btn">
        <span>FqWrsd</span>
        <div className="hamburger">
          <HamburgerIcon className="hamburger-icon" />
        </div>
      </button>
    </>
  );
}
