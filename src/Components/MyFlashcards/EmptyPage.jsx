import React from "react";
import { NavLink } from "react-router-dom";
import notFound from "../../assets/No_results_found.png";
//component empty when we do not create any card then it shows 
export default function EmptyPage() {
  return (
    <div className="grid place-content-center h-[60vh]">
      <div className="grid place-content-center order-1 sm:order-2">
        <img
          className="h-[180px] mb-10"
          src={notFound}
          alt="files not found or Empty!"
        />
      </div>
      <span className="grid place-content-center text-2xl font-semibold italic rounded-md mb-10 text-center order-2 sm:order-1">
        No card is Created.
      </span>
      <div className="grid place-content-center order-3">
        {/* button to go to createnew page */}
        <NavLink
          to="/"
          className="border-slate-500  border w-52 p-2 bg-[var(--color-red)] rounded-lg text-white grid place-content-center font-semibold"
        >
          <span>Create Flashcard</span>
        </NavLink>
      </div>
    </div>
  );
}
