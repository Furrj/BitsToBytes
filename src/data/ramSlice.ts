import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface RamState {
  currentAddress: number;
}

const initialState: RamState = {
  currentAddress: 0,
};

export const ramSlice = createSlice({
  name: "ram",
  initialState,
  reducers: {
    increment: (state) => {
      state.currentAddress += 1;
    },
    decrement: (state) => {
      state.currentAddress -= 1;
    },
    setAddress: (state, action: PayloadAction<number>) => {
      state.currentAddress = action.payload;
    },
  },
});

export const { increment, decrement, setAddress } = ramSlice.actions;

export default ramSlice.reducer;
