import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateLink } from "../../redux/link";

export default function TermBar() {
  const slug = useParams().slug; //getting the slug from the link for targetting the data
  const { cards } = useSelector((state) => state.cards); // fetching the data from redux store
  const dispatch = useDispatch();
  const handleLink = () => {
    setTimeout(() => {
      dispatch(updateLink(`${window.location.href}`)); // updating the link store on click for sharing
    }, 500);
  };
  return (
    <div className="hidden md:block">
      <div className="bg-white min-w-[150px]  max-w-[300px] shadow-md p-4 rounded-md md:order-none order-1">
        <strong className="text-slate-500 text-xl">Flashcards</strong>
        <hr className="border-slate-500" />
        <div className=" p-2 space-y-3 termName text-center max-h-[40vh] overflow-auto">
          {cards[slug].values.terms.map((term, i) => {
            // displays term name that exists in the card group
            return (
              <NavLink
                to={`/flashcard/${slug}/${i}`}
                key={i}
                className={`font-semibold block active:text-[var(--color-red)] hover:text-lg hover:text-[var(--color-red)] duration-150`}
                onClick={handleLink}
              >
                {term.termName}
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}
