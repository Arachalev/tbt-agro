import { configureStore } from "@reduxjs/toolkit";

import deviceWidthReducer from "./features/deviceWidthSlice";
import linksReducer from "./features/sideBarSlice"

const store = configureStore({
  reducer: { deviceWidthReducer, linksReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
