import { configureStore } from "@reduxjs/toolkit";
import ramReducer from "./ramSlice";

export const store = configureStore({
  reducer: {
    ram: ramReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
