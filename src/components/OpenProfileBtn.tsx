import { HamburgerIcon } from "../assets/icons";
import { AppDispatch } from "../redux-states/store";
import { useDispatch } from "react-redux";
import { setDrawerState, setModalState } from "../redux-states/uiSlice";

export default function OpenProfileBtn() {
  const dispatch: AppDispatch = useDispatch();

  const handleClick = () => {
    const browserWidth = window.innerWidth;

    if (browserWidth <= 480) {
      dispatch(
        setDrawerState({
          open: true,
          backdropCanClose: true,
          viewName: "USER_PROFILE",
        })
      );
    } else {
      // Open Modal
      dispatch(
        setModalState({
          open: true,
          viewName: "USER_PROFILE",
          width: "w-[400px]",
          marginTop: "mt-10",
          extraStyles: "h-[90vh]",
        })
      );
    }
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
