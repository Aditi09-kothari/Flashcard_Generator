import { createSlice } from "@reduxjs/toolkit";

// slice for link data - shareable link
const linkSlice = createSlice({
  name: "link",
  initialState: {
    link: `${window.location.href}`,
  },
  reducers: {
    updateLink: (state, action) => {
      state.link = action.payload;
    },
  },
});

export const { updateLink } = linkSlice.actions;
export default linkSlice.reducer;
