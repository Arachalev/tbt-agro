"use client";

import { createSlice, PayloadActionCreator } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  width: 1440,
};

const deviceWidth = createSlice({
  name: "device width",
  initialState,
  reducers: {
    getDeviceWith: (state) => {
      state.width = window.outerWidth;
    },
  },
});

export const { getDeviceWith } = deviceWidth.actions;

export const selectDeviceWith = (state: RootState) => state.deviceWidthReducer;

export default deviceWidth.reducer;
