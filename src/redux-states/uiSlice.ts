import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import getTheme from "../utilities/getTheme";

interface UIState {
  theme: string;
  modal: {
    open?: boolean;
    show?: boolean;
    content?: string;
    marginTop?: string;
    width?: string;
    extraStyles?: string;
  };
}

const initialState: UIState = {
  theme: getTheme(),
  modal: {
    open: false,
    show: false,
    content: "WELCOME_SCREEN",
    width: "w-[400px]",
    marginTop: "mt-[28px]",
    extraStyles: "",
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
        show?: boolean;
        content?: string;
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
  },
});

export const { setTheme, setModalState, toggleModalOpen, setModalOpen } =
  uiSlice.actions;

export default uiSlice.reducer;
