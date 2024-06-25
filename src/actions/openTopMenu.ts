import { store } from "../redux-states/store";
import { setDrawerState, setModalState } from "../redux-states/uiSlice";

export default function openTopMenu(viewName: string) {
  const browserWidth = window.innerWidth;
  if (browserWidth >= 480) {
    store.dispatch(setModalState({ open: true, viewName: viewName }));
  } else {
    store.dispatch(setDrawerState({ open: true, viewName: viewName }));
  }
}
