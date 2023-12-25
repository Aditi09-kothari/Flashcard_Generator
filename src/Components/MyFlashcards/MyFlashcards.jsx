import React from "react";
import { useSelector } from "react-redux";
import EmptyPage from "./EmptyPage";
import FlashcardsList from "./FlashcardsList";
//component of MyFlashcard.
export default function MyFlashcards() {
  const { cards } = useSelector((state) => state.cards); // fecting the cards store data for displaying the pages
  return (
    <div className="my-5 px-5 2xl:px-44 xl:px-20 flex flex-col">
      {/* if there are no cards in cards store, then displays empty page else displays flashcard List page */}
      {cards.length === 0 ? <EmptyPage /> : <FlashcardsList />}
    </div>
  );
}
