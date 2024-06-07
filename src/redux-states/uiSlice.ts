import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import getTheme from "../helpers/getTheme";

interface UIState {
  theme: string;
  modal: {
    open: boolean;
    backdropCanClose: boolean;
    viewName: string;
    marginTop: string;
    width: string;
    extraStyles: string;
  };
  drawer: {
    open: boolean;
    backdropCanClose: boolean;
    viewName: string;
  };
}

const initialState: UIState = {
  theme: getTheme(),
  modal: {
    open: false,
    backdropCanClose: true,
    viewName: "",
    width: "",
    marginTop: "",
    extraStyles: "",
  },
  drawer: {
    open: false,
    backdropCanClose: true,
    viewName: "",
  },
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<string>) {
      state.theme = action.payload;
    },
    setModalState(
      state,
      action: PayloadAction<{
        open?: boolean;
        backdropCanClose?: boolean;
        viewName?: string;
        marginTop?: string;
        width?: string;
        extraStyles?: string;
      }>
    ) {
      state.modal = {
        ...state.modal,
        ...action.payload,
      };
    },
    toggleModalOpen(state) {
      state.modal.open = !state.modal.open;
    },
    setModalOpen(state, action: PayloadAction<boolean>) {
      state.modal.open = action.payload;
    },
    setDrawerState(
      state,
      action: PayloadAction<{
        open?: boolean;
        backdropCanClose?: boolean;
        viewName?: string;
      }>
    ) {
      state.drawer = {
        ...state.drawer,
        ...action.payload,
      };
    },
    toggleDrawerOpen(state) {
      state.drawer.open = !state.drawer.open;
    },
    setDrawerOpen(state, action: PayloadAction<boolean>) {
      state.drawer.open = action.payload;
    },
  },
});

export const {
  setTheme,
  setModalState,
  toggleModalOpen,
  setModalOpen,
  setDrawerState,
  toggleDrawerOpen,
  setDrawerOpen,
} = uiSlice.actions;

export default uiSlice.reducer;
