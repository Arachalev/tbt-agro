import { configureStore } from "@reduxjs/toolkit";

import deviceWidthReducer from "./features/deviceWidthSlice";
import linksReducer from "./features/sideBarSlice";
import { baseApiSlice } from "./services/baseApiSlice";

const store = configureStore({
  reducer: {
    deviceWidthReducer,
    linksReducer,
    [baseApiSlice.reducerPath]: baseApiSlice.reducer,
  },
  middleware: (getDefaultmiddleWare) =>
    getDefaultmiddleWare().concat(baseApiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
