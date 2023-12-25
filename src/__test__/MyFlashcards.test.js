import { cleanup, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { BrowserRouter } from "react-router-dom";
import flashcards from "../redux/flashcards";
import MyFlashcards from "../components/MyFlashcards/MyFlashcards";

afterEach(cleanup);

describe("My Flashcards Page", () => {
  it("Should show Empty Page when there are no cards in redux store", () => {
    const store = configureStore({
      reducer: {
        cards: flashcards,
      },
    });

    render(
      <BrowserRouter>
        <Provider store={store}>
          <MyFlashcards />
        </Provider>
      </BrowserRouter>
    );

    expect(screen.getByText(/empty in here/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Empty/i)).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /create flashcard/i })
    ).toBeInTheDocument();
  });
});
