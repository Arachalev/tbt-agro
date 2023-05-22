import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = { showLinks: true };

const SideBarSlice = createSlice({
  name: "side bar",
  initialState,
  reducers: {
    editLinkState: (state, action: PayloadAction<boolean>) => {
      state.showLinks = action.payload;
    },
  },
});

export default SideBarSlice.reducer;

export const { editLinkState } = SideBarSlice.actions;

export const selectLinkState = (state: RootState) =>
  state.linksReducer.showLinks;
