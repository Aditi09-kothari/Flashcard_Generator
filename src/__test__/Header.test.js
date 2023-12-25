import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";
import Navbar from "../Components/Navbar";

describe("Navbar", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Navbar />
      </Provider>
    </BrowserRouter>
  );

  it("Should contain the Links", () => {
    expect(
      screen.getByRole("link", { name: /Create New/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /My Flashcard/i })
    ).toBeInTheDocument();
  });
});
