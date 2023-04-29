import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface instructionState {
  instructions: string[][];
  currentInstruction: number;
}

const initialState: instructionState = {
  instructions: [],
  currentInstruction: 0,
};

export const instructionSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    setInstructions: (state, action: PayloadAction<string[][]>) => {
      state.instructions = action.payload;
    },
    incrementCurrentInstruction: (state) => {
      state.currentInstruction += 1;
    },
  },
});

export const { setInstructions, incrementCurrentInstruction } =
  instructionSlice.actions;

export default instructionSlice.reducer;
