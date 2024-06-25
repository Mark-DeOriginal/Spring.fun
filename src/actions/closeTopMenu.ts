import { store } from "../redux-states/store";
import { setDrawerOpen, setModalOpen } from "../redux-states/uiSlice";

export default function closeTopMenu() {
  store.dispatch(setModalOpen(false));
  store.dispatch(setDrawerOpen(false));
}
