import { store } from "../redux-states/store";
import { setModalOpen } from "../redux-states/uiSlice";

export default function closeModal() {
  store.dispatch(setModalOpen(false));
}
