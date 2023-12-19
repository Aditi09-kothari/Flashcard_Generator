// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className=" border-b border-gray-300 mt-6 ml-40 mr-40">
        <h1 className='text-2xl text-black'>Create Flashcard</h1>
      <div className="custom-container mx-auto flex justify-between mt-2">
        <div className="flex space-x-4 order-1 ">
          <Link to="/" className="text-gray-500 border-b-2 border-transparent  hover:text-red-500 hover:border-red-500 navlink" >
            Create New
          </Link>
          <Link to="myflashcard" className="text-gray-500 border-b-2 border-transparent hover:border-red-600 hover:text-red-500 navlink">
           My Flashcard
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
