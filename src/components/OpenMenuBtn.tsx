import { HamburgerIcon } from "../assets/icons";
import { AppDispatch, RootState } from "../redux-states/store";
import { setIsMenuOpen } from "../redux-states/uiSlice";
import { useDispatch, useSelector } from "react-redux";
import Menu from "./Menu";

export default function OpenMenuBtn() {
  const dispatch: AppDispatch = useDispatch();
  const isMenuOpen = useSelector((state: RootState) => state.ui.isMenuOpen);

  const toggleMenuOpen = () => {
    dispatch(setIsMenuOpen(!isMenuOpen));
  };

  return (
    <>
      <button
        onClick={() => toggleMenuOpen()}
        className="wallet-connected-btn flex items-center gap-2 active:scale-[0.95]"
      >
        <span>FqWrsd</span>
        <div className="hamburger">
          <HamburgerIcon className="hamburger-icon" />
        </div>
      </button>
      {/* 
          Menu 
    */}
      <Menu />
    </>
  );
}
