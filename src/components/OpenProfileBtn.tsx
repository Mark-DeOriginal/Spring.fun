import useSetTopMenu from "../actions/setTopMenu";
import { HamburgerIcon } from "../assets/icons";

export default function OpenProfileBtn() {
  const setTopMenu = useSetTopMenu();

  const isOnboarded = false;

  const handleClick = () => {
    setTopMenu(isOnboarded ? "user_profile" : "user_welcome");
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
