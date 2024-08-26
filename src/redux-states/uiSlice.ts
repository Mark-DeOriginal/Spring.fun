import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import getTheme from "../helpers/getTheme";
import tonLogo from "/ton-logo.jpg";

export interface UIState {
  theme: string;
  modal: {
    open?: boolean;
    backdropCanClose?: boolean;
    viewName: string;
    marginTop?: string;
    width?: string;
    dialogStyles?: string;
    textAlign?: string;
    renderCount?: number;
  };
  drawer: {
    open?: boolean;
    backdropCanClose?: boolean;
    viewName: string;
    textAlign?: string;
    height?: number | "auto";
    isResized?: boolean;
    renderCount?: number;
  };
  userJettons: {
    jettonLogo: string;
    jettonName: string;
    jettonAmount: number;
    jettonTicker: string;
    jettonValue: number;
    jettonPerformance: number;
    jettonAddress: string;
    jettonCategory: "owned" | "created";
  }[];
  welcomePageView: {
    viewIndex: number;
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
    dialogStyles: "",
    textAlign: "",
    renderCount: 0,
  },
  drawer: {
    open: false,
    backdropCanClose: true,
    viewName: "",
    textAlign: "",
    height: "auto",
    isResized: false,
    renderCount: 0,
  },
  userJettons: [
    {
      jettonLogo: tonLogo,
      jettonName: "TON",
      jettonAmount: 5000,
      jettonTicker: "TON",
      jettonPerformance: 0,
      jettonValue: 35000,
      jettonAddress: "SosieWewilafglkaskd",
      jettonCategory: "owned",
    },
    {
      jettonLogo: tonLogo,
      jettonName: "TON",
      jettonAmount: 5000,
      jettonTicker: "TON",
      jettonPerformance: -3.5,
      jettonValue: 65000,
      jettonAddress: "SosieWewilafglkaskd",
      jettonCategory: "created",
    },
    {
      jettonLogo: tonLogo,
      jettonName: "TON",
      jettonAmount: 5000,
      jettonTicker: "TON",
      jettonPerformance: 3.5,
      jettonValue: 15000,
      jettonAddress: "SosieWewilafglkaskd",
      jettonCategory: "owned",
    },
  ],
  welcomePageView: {
    viewIndex: 0,
  },
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<string>) {
      state.theme = action.payload;
    },
    setModalState(state, action: PayloadAction<UIState["modal"]>) {
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
    setDrawerState(state, action: PayloadAction<UIState["drawer"]>) {
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
    setUserJettons(state, action: PayloadAction<UIState["userJettons"]>) {
      state.userJettons = action.payload;
    },
    addUserJetton(state, action: PayloadAction<UIState["userJettons"]>) {
      state.userJettons = [...state.userJettons, ...action.payload];
    },
    incTopMenuRenderCount(state, action: PayloadAction<"modal" | "drawer">) {
      if (action.payload === "modal") {
        state.modal.renderCount! += 1;
      } else {
        state.drawer.renderCount! += 1;
      }
    },
    incrWelcomePageViewIndex(state) {
      state.welcomePageView.viewIndex += 1;
    },
    decrWelcomePageViewIndex(state) {
      state.welcomePageView.viewIndex -= 1;
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
  setUserJettons,
  addUserJetton,
  incTopMenuRenderCount,
  incrWelcomePageViewIndex,
  decrWelcomePageViewIndex,
} = uiSlice.actions;

export default uiSlice.reducer;
