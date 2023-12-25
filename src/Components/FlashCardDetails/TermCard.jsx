import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function TermCard() {
  const { cards } = useSelector((state) => state.cards); // fetching data from the cards store redux
  const { print } = useSelector((state) => state.print); // fecting data from the print store redux
  const { slug, id } = useParams(); // destructuring and fetching the slug and id data from the link params

  return (
    <>
      <div
        className={`rounded-md w-80 md:min-w-[500px] lg:min-w-[600px] 2xl:min-w-[700px] lg:space-y-0 overflow-hidden bg-white grid grid-cols-1 ${
          cards[slug].values.terms[id].termImg ? "lg:grid-cols-2" : null // if the term image exists, then display it, else hide the div
        } ${
          print === 1 ? "border-2 border-solid border-black" : null
        } p-5 space-x-4 space-y-8 items-center shadow-sm hover:-translate-y-2 hover:shadow-lg duration-700`}
      >
        <div
          className={`bg-gray-100 overflow-hidden my-2 ${
            cards[slug].values.terms[id].termImg ? null : "hidden"
          }`}
        >
          <img
            className="border-2 rounded-md"
            src={cards[slug].values.terms[id].termImg} // source for the image
            alt={cards[slug].values.terms[id].termName} // source for Term Name
          />
        </div>
        {cards[slug].values.terms[id].termImg ? null : ( // if the term image does not exist, display the term Name in the card instead
          <div className="text-center text-2xl font-semibold">
            <span className="border-b-2 border-slate-500">
              {cards[slug].values.terms[id].termName}
            </span>
          </div>
        )}
        <div className="my-2">
          <p className="p-2 overflow-auto bg-grey-100 rouded-md text-center">
            {cards[slug].values.terms[id].termDef}
          </p>
        </div>
      </div>
      <p className="mx-auto  h-[0.15rem] w-80 bg-slate-500 opacity-40 mt-3 rounded-[40%] shadow-xl"></p>
    </>
  );
}
export default TermCard;
