import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-500 to-blue-500 py-8 text-white border-t left-0  border-gray-700">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo or Branding */}
          <div className="text-2xl font-semibold">
            <Link to="/">Admission System</Link>
          </div>

          {/* Quick Links */}
          <div className="flex space-x-6">
            <Link to="/about" className="hover:text-gray-200">
              About
            </Link>
            <Link to="/services" className="hover:text-gray-200">
              Services
            </Link>
            <Link to="/contact" className="hover:text-gray-200">
              Contact
            </Link>
            <Link to="/privacy-policy" className="hover:text-gray-200">
              Privacy Policy
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2025 Admission System. All Rights Reserved.</p>
          <p>
            1234 Street Name, City, Country | Email: contact@admissionsystem.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
