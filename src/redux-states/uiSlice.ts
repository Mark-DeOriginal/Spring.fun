import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import getTheme from "../utilities/getTheme";

interface UIState {
  theme: string;
  isMenuOpen: boolean;
}

const initialState: UIState = {
  theme: getTheme(),
  isMenuOpen: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<string>) {
      state.theme = action.payload;
    },
    setIsMenuOpen(state, action: PayloadAction<boolean>) {
      state.isMenuOpen = action.payload;
    },
  },
});

export const { setTheme, setIsMenuOpen } = uiSlice.actions;

export default uiSlice.reducer;
