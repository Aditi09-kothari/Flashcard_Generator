import { createSlice } from "@reduxjs/toolkit";

// slice for print state
export const printSlice = createSlice({
  name: "print",
  initialState: {
    print: 0,
  },
  reducers: {
    setPrint: (state, action) => {
      state.print = action.payload;
    },
  },
});

export const { setPrint } = printSlice.actions;
export default printSlice.reducer;
