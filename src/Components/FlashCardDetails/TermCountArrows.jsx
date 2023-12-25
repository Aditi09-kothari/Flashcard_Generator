import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { TbArrowLeftSquare, TbArrowRightSquare } from "react-icons/tb";
import { updateLink } from "../../redux/link";

export default function TermCountArrows() {
  const { cards } = useSelector((state) => state.cards);
  const { slug, id } = useParams();
  const dispatch = useDispatch();
  let idInt = parseInt(id);
  const navigate = useNavigate();
  const handleClick = (action) => {
    if (action === "back" && idInt > 0) {
      navigate(`/flashcard/${slug}/${idInt - 1}`);
      setTimeout(() => {
        dispatch(updateLink(`${window.location.href}`));
      }, 500);
    } else if (
      action === "next" &&
      idInt < cards[slug].values.terms.length - 1
    ) {
      navigate(`/flashcard/${slug}/${idInt + 1}`);
      setTimeout(() => {
        dispatch(updateLink(`${window.location.href}`));
      }, 500);
    }
  };

  return (
    <>
      <TbArrowLeftSquare
        size={`2rem`}
        className={`${
          idInt > 0
            ? "hover:text-[var(--color-red)] hover:-translate-x-2 duration-300"
            : "text-slate-300"
        }`}
        onClick={() => handleClick(`back`)}
      />
      <span className="text-lg font-bold">
        [{idInt + 1} / {cards[slug].values.terms.length}]
      </span>
      <TbArrowRightSquare
        size={`2rem`}
        className={`${
          idInt < cards[slug].values.terms.length - 1
            ? "hover:text-[var(--color-red)] hover:translate-x-2 duration-300"
            : "text-slate-300"
        }`}
        onClick={() => handleClick(`next`)}
      />
    </>
  );
}
