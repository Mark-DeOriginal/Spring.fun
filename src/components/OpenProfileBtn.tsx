import { HamburgerIcon } from "../assets/icons";
import { store } from "../redux-states/store";
import { setDrawerState, setModalState } from "../redux-states/uiSlice";

export default function OpenProfileBtn() {
  const isOnboarded = false;

  const handleClick = () => {
    const viewName = isOnboarded ? "user_profile" : "user_welcome";

    const browserWidth = window.innerWidth;

    if (browserWidth >= 480) {
      store.dispatch(
        setModalState({
          open: true,
          viewName: viewName,
          textAlign: "left",
          dialogStyles: "w-[450px]",
        })
      );
    } else {
      store.dispatch(
        setDrawerState({ open: true, viewName: viewName, textAlign: "center" })
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
