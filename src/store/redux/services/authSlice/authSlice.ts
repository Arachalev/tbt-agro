import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const initialState = {
  token: null,
  userType: null,
};

const authSlice = createSlice({
  initialState,
  name: "auth slice",
  reducers: {
    setCredentials: (state, action) => {
      const { token, userType } = action.payload;
      state.token = token;
      state.userType = userType;
      sessionStorage.setItem("token", token);
      sessionStorage.setItem("userType", userType);
    },

    logOut: (state) => {
      sessionStorage.clear();
      state.token = null;
      state.userType = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectAuthToken = (state: RootState) => state.auth;
