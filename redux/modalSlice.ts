import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ModalState {
  registerModal: boolean;
  loginModal: boolean;
}

const initialState: ModalState = {
  registerModal: false,
  loginModal: false,
};

export const ModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    registerModalFunc: (state) => {
      state.registerModal = !state.registerModal;
    },
    loginModalFunc: (state) => {
      state.loginModal = !state.loginModal;
    },
  },
});

export const { registerModalFunc, loginModalFunc } = ModalSlice.actions;

export default ModalSlice.reducer;
