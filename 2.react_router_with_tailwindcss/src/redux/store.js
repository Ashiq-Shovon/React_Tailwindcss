import { configureStore } from "@reduxjs/toolkit";
import { vanApi } from "./services/vansApi";
import  vanReducer  from "./services/vanSlice"
export const store = configureStore({
  reducer: {
    [vanApi.reducerPath]: vanApi.reducer,
    vanId: vanReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(vanApi.middleware),
});
