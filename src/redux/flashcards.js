import { createSlice } from "@reduxjs/toolkit";

// slice for flashcard data
export const flashcardSlice = createSlice({
  name: "flashcards",
  initialState: {
    cards: [],
  },
  reducers: {
    cardAdd: (state, action) => {
      state.cards = [...state.cards, action.payload];
    },
    cardRem: (state, action) => {
      state.cards.splice(action.payload, 1);
    },
  },
});

export const { cardAdd, cardRem } = flashcardSlice.actions;
export default flashcardSlice.reducer;
