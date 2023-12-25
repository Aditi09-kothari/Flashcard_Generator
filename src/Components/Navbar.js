import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="my-5 md:mt-10 px-5 2xl:px-44 xl:px-20 navbar">
      <h1 className="font-bold text-lg lg:text-2xl">Create Flashcard</h1>
      <div className="my-5 text-sm md:text-base font-medium font-bold text-slate-500">
        <NavLink to="/" className="mr-10 relative">
          Create New
        </NavLink>
        <NavLink to="/myflashcard" className="relative">
          My Flashcard
        </NavLink>
        <hr className="border-slate-500" />
      </div>
    </div>
  );
};

export default Navbar;
