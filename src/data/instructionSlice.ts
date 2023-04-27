import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface instructionState {
  instructions: string[][];
}

const initialState: instructionState = {
  instructions: [],
};

export const instructionSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    setInstructions: (state, action: PayloadAction<[][]>) => {
      state.instructions = action.payload;
    },
  },
});

export const { setInstructions } = instructionSlice.actions;

export default instructionSlice.reducer;
