import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle navbar background change on scroll
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg"
          : "bg-gradient-to-r from-purple-600 via-indigo-700 to-blue-600"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <Link
            to="/"
            className="group flex items-center space-x-2 no-underline"
          >
            <span
              className={`text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text ${
                isScrolled ? "text-transparent" : "text-white"
              }`}
            >
              Admission System
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { name: "Home", path: "/" },
              { name: "Login", path: "/login" },
              { name: "Register", path: "/register" },
              { name: "Enter Details", path: "/details" },
              { name: "Recommendations", path: "/recommendation" },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative group px-2 py-1 no-underline ${
                  isScrolled ? "text-gray-800" : "text-white"
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                <span className="absolute inset-0 w-full h-full bg-purple-100 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 rounded-lg hover:bg-purple-100/10">
            <svg
              className={`w-6 h-6 ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
