import { configureStore } from "@reduxjs/toolkit";

import deviceWidthReducer from "./features/deviceWidthSlice";

const store = configureStore({
  reducer: { deviceWidthReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
