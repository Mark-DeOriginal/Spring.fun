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
    height: number | "auto";
    isResized: boolean;
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
    height: "auto",
    isResized: false,
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
        height?: number | "auto";
        isResized: boolean;
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
    setDrawerHeight(state, action: PayloadAction<number>) {
      state.drawer.height = action.payload;
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
  setDrawerHeight,
} = uiSlice.actions;

export default uiSlice.reducer;
