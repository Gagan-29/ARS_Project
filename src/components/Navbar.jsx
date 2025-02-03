import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4 shadow-2xl fixed top-0 left-0 w-full z-10 border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Brand Name */}
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 transition-all duration-500">
          <Link to="/">Admission System</Link>
        </h1>

        {/* Navigation Links */}
        <ul className="flex space-x-8 text-lg">
          <li>
            <Link
              to="/"
              className="text-gray-300 hover:text-white transition-all duration-300 relative group"
            >
              Home
              <span className="absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 w-0 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="text-gray-300 hover:text-white transition-all duration-300 relative group"
            >
              Login
              <span className="absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 w-0 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              className="text-gray-300 hover:text-white transition-all duration-300 relative group"
            >
              Register
              <span className="absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 w-0 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/details"
              className="text-gray-300 hover:text-white transition-all duration-300 relative group"
            >
              Enter Details
              <span className="absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 w-0 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/recommendation"
              className="text-gray-300 hover:text-white transition-all duration-300 relative group"
            >
              Recommendations
              <span className="absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 w-0 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
