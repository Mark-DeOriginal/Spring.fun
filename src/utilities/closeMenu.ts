import { store } from "../redux-states/store";
import { setIsMenuOpen } from "../redux-states/uiSlice";

export const closeMenu = () => {
  store.dispatch(setIsMenuOpen(false));
  document.body.style.overflowY = "auto";
};

export default closeMenu;
