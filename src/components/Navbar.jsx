import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Home, LogIn, UserPlus, BookOpen, Award, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Login", path: "/login", icon: LogIn },
    { name: "Register", path: "/register", icon: UserPlus },
    { name: "Enter Details", path: "/details", icon: BookOpen },
    { name: "Recommendations", path: "/recommendation", icon: Award },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg"
          : "bg-gradient-to-r from-cyan-600 via-indigo-700 to-purple-600"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <Link
            to="/"
            className="flex items-center space-x-2 no-underline group"
          >
            <span
              className={`text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text ${
                isScrolled ? "text-transparent text-gray-800" : "text-white"
              }`}
            >
              Admission System
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`
                  flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 
                  ${
                    isScrolled
                      ? "text-gray-800 hover:bg-gray-100 hover:text-indigo-600"
                      : "text-white hover:bg-white/10 hover:text-cyan-200"
                  }
                `}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled
                  ? "text-gray-800 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div
            className={`
              md:hidden absolute left-0 right-0 top-full 
              ${
                isScrolled
                  ? "bg-white shadow-lg"
                  : "bg-gradient-to-r from-cyan-600 via-indigo-700 to-purple-600"
              } 
              transition-all duration-300 ease-in-out
            `}
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`
                  flex items-center space-x-3 px-4 py-3 border-b 
                  ${
                    isScrolled
                      ? "text-gray-800 hover:bg-gray-100 border-gray-100"
                      : "text-white hover:bg-white/10 border-white/10"
                  }
                `}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
