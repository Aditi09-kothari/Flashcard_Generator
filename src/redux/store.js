import { configureStore } from "@reduxjs/toolkit";
import { loadFromLocalStorage } from "../Components/LocalStorage";
import cardReducer from "./flashcards";
import printReducer from "./print";
import linkReducer from "./link";

// constant to load data from local storage and save it
const preloadedState = loadFromLocalStorage();

// store for handling all redux states and loads initial data from constant preloadedState
export default configureStore({
  reducer: {
    //reducerName : imported reducer --format
    cards: cardReducer,
    print: printReducer,
    link: linkReducer,
  },
  preloadedState,
});
