import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import FlashcardsList from "../components/MyFlashcards/FlashcardsList";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "../redux/flashcards";

const preloadedState = {
  cards: {
    cards: [
      {
        values: {
          cardName: "A Test Name",
          cardDesc: "A Test card description",
          cardImg: "https://unsplash.com/photos/fXghdlO6mgk",
          terms: [{ termName: "Test Term1" }, { termName: "Test Term2" }],
        },
      },
    ],
  },
};

const store = configureStore({
  reducer: {
    cards: cardReducer,
  },
  preloadedState,
});

describe("Flash cards list", () => {
  it("Should show title cards when there is value in the store", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <FlashcardsList />
        </Provider>
      </BrowserRouter>
    );

    expect(screen.getByTestId("TitleCard")).toBeInTheDocument();
  });
});
