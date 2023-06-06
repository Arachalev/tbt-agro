import { configureStore } from "@reduxjs/toolkit";

import deviceWidthReducer from "./features/deviceWidthSlice";
import linksReducer from "./features/sideBarSlice";
import { baseApiSlice } from "./services/baseApiSlice";
import authSlice from "./services/authSlice/authSlice";
import profileSlice from "./services/buyerSlice/profileSlice/profileSlice";
import sellerProfileSlice from "./services/sellerSlice/profileSlice/profileSlice";

const store = configureStore({
  reducer: {
    deviceWidthReducer,
    linksReducer,
    auth: authSlice,
    buyerProfile: profileSlice,
    sellerProfile:sellerProfileSlice,
    [baseApiSlice.reducerPath]: baseApiSlice.reducer,
  },
  middleware: (getDefaultmiddleWare) =>
    getDefaultmiddleWare().concat(baseApiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
