import { useNavigate } from "react-router-dom";
import { HamburgerIcon } from "../assets/icons";
import { store } from "../redux-states/store";
import { setDrawerState, setModalState } from "../redux-states/uiSlice";

export default function OpenProfileBtn() {
  const navigate = useNavigate();
  const isUserOnboarded = false;

  const handleClick = () => {
    const browserWidth = window.innerWidth;

    if (isUserOnboarded) {
      navigate("user-profile");
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
