import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

let dataArray: number[] = [];

for (let i = 0; i < 20; i++) {
  dataArray[i] = i * 5;
}

export interface RamState {
  currentAddress: number;
  data: number[];
}

const initialState: RamState = {
  currentAddress: 0,
  data: dataArray,
};

export const ramSlice = createSlice({
  name: "ram",
  initialState,
  reducers: {
    incrementAddress: (state) => {
      state.currentAddress += 1;
    },
    decrementAddress: (state) => {
      state.currentAddress -= 1;
    },
    setAddress: (state, action: PayloadAction<number>) => {
      state.currentAddress = action.payload;
    },
    incrementValue: (state, info: PayloadAction<number[]>) => {
      state.data[info.payload[0]] += info.payload[1];
    },
    decrementValue: (state, info: PayloadAction<number[]>) => {
      state.data[info.payload[0]] -= info.payload[1];
    },
    setValue: (state, info: PayloadAction<number[]>) => {
      //[address, value]
      state.data[info.payload[0]] = info.payload[1];
    },
  },
});

export const {
  incrementAddress,
  decrementAddress,
  setAddress,
  incrementValue,
  decrementValue,
  setValue,
} = ramSlice.actions;

export default ramSlice.reducer;
