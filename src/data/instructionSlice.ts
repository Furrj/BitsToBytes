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
    resetCurrentInstruction: (state) => {
      state.currentInstruction = 0;
    },
  },
});

export const {
  setInstructions,
  incrementCurrentInstruction,
  resetCurrentInstruction,
} = instructionSlice.actions;

export default instructionSlice.reducer;
