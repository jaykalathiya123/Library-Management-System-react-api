import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg p-4">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold">
          <Link to="/" className="hover:text-gray-200 transition duration-200">
          📚 Library Management System
          </Link>
        </h1>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none text-white hover:text-gray-200 transition duration-200"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        <ul
          className={`flex-col lg:flex lg:flex-row lg:space-x-6 ${
            isOpen ? "flex" : "hidden"
          } lg:block`}
        >
          <li>
            <Link
              to="/"
              className="block px-4 py-2 hover:bg-white hover:text-blue-600 rounded-md transition duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/view-books-data"
              className="block px-4 py-2 hover:bg-white hover:text-blue-600 rounded-md transition duration-200"
            >
              View Data
            </Link>
          </li>
          <li>
            <Link
              to="/view-details"
              className="block px-4 py-2 hover:bg-white hover:text-blue-600 rounded-md transition duration-200"
            >
              View Details
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
