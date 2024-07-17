import { store } from "../redux-states/store";
import { setDrawerState, setModalState } from "../redux-states/uiSlice";

export default function closeTopMenu() {
  store.dispatch(setModalState({ open: false, renderCount: 0, viewName: "" }));
  store.dispatch(setDrawerState({ open: false, renderCount: 0, viewName: "" }));
}
