import React from "react";
import { useParams } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function DetailsHeader() {
  const slug = useParams().slug; // getting the slug to get the details of the card group
  const { cards } = useSelector((state) => state.cards); // getting the cards data for displaying values
  return (
    <div className="flex space-x-5">
      <div>
        {/* back button to go back to my flashcards page */}
        <Link to="/myflashcard">
          <FaLongArrowAltLeft
            className="inline-block hover:text-[var(--color-red)]"
            size={"2rem"}
          />
        </Link>
      </div>
      {/* displays the header with card group name and description */}
      <div className="space-y-5 pb-5 overflow-hidden">
        <h1 className="font-bold text-xl">
          <span
            className="border-b-2 border-solid border-black rounded-sm"
            data-testid="Details-HeaderName"
          >
            {cards[slug].values.cardName}
          </span>
        </h1>
        <p
          className="text-md text-slate-500 italic"
          data-testid="Details-HeaderDesc"
        >
          {cards[slug].values.cardDesc}
        </p>
      </div>
    </div>
  );
}

export default DetailsHeader;
