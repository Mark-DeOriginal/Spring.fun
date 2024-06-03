import { useSelector } from "react-redux";
import UserWelcomeContent from "./onboarding/UserWelcome";
import { RootState } from "../redux-states/store";
import Modal from "./Modal";

export default function Menu() {
  const openMenu = useSelector((state: RootState) => state.ui.isMenuOpen);

  return (
    openMenu && (
      <>
        <div className="menu big-screen-view max-tablet-lg:hidden">
          <UserWelcomeContent />
        </div>
        <Modal>
          <UserWelcomeContent />
        </Modal>
      </>
    )
  );
}
