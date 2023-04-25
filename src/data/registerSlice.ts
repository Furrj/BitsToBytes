import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface RegisterState {
  value: number;
}

const initialState: RegisterState = {
  value: 0,
};

export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { setValue } = registerSlice.actions;

export default registerSlice.reducer;
