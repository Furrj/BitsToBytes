import { configureStore } from "@reduxjs/toolkit";
import ramReducer from "./ramSlice";
import registerReducer from "./registerSlice";
import instructionReducer from "./instructionSlice";

export const store = configureStore({
  reducer: {
    ram: ramReducer,
    register: registerReducer,
    instructions: instructionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
