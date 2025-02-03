import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-500 p-4 shadow-lg fixed top-0 left-0 w-full z-10 border-b border-gray-700">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Brand Name */}
        <h1 className="text-3xl font-bold text-white">
          <Link
            to="/"
            className="no-underline hover:text-yellow-300 transition duration-300"
          >
            Admission System
          </Link>
        </h1>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-lg">
          <li>
            <Link
              to="/"
              className="text-white hover:text-yellow-300 transition duration-300 relative group no-underline"
            >
              Home
              <span className="absolute left-0 bottom-0 h-0.5 bg-yellow-300 w-0 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="text-white hover:text-yellow-300 transition duration-300 relative group no-underline"
            >
              Login
              <span className="absolute left-0 bottom-0 h-0.5 bg-yellow-300 w-0 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              className="text-white hover:text-yellow-300 transition duration-300 relative group no-underline"
            >
              Register
              <span className="absolute left-0 bottom-0 h-0.5 bg-yellow-300 w-0 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/details"
              className="text-white hover:text-yellow-300 transition duration-300 relative group no-underline"
            >
              Enter Details
              <span className="absolute left-0 bottom-0 h-0.5 bg-yellow-300 w-0 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/recommendation"
              className="text-white hover:text-yellow-300 transition duration-300 relative group no-underline"
            >
              Recommendations
              <span className="absolute left-0 bottom-0 h-0.5 bg-yellow-300 w-0 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
