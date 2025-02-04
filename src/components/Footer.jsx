import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 via-indigo-700 to-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link
              to="/"
              className="text-2xl font-bold text-white hover:text-purple-200 transition-colors duration-300 no-underline"
            >
              Admission System
            </Link>
            <p className="text-purple-200 mt-2 text-sm">
              Empowering students to find their perfect educational path through
              innovative admission solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["About", "Services", "Contact", "Privacy Policy"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to={`/${item.toLowerCase().replace(" ", "-")}`}
                      className="text-purple-200 hover:text-white transition-colors duration-300 flex items-center group no-underline"
                    >
                      <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                        {item}
                      </span>
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h3>
            <div className="space-y-2 text-purple-200">
              <p className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" /> VIT Vellore,Tamil Nadu
              </p>
              <p className="flex items-center">
                <Mail className="w-5 h-5 mr-2" /> contact@admissionsystem.com
              </p>
              <p className="flex items-center">
                <Phone className="w-5 h-5 mr-2" /> +91 9347838323
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {[
                {
                  name: "Facebook",
                  icon: Facebook,
                  url: "https://facebook.com",
                },
                { name: "Twitter", icon: Twitter, url: "https://twitter.com" },
                {
                  name: "LinkedIn",
                  icon: Linkedin,
                  url: "https://linkedin.com",
                },
                {
                  name: "Instagram",
                  icon: Instagram,
                  url: "https://instagram.com",
                },
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors duration-300 group"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-purple-200 text-sm">
            <p>
              &copy; {new Date().getFullYear()} Admission System. All Rights
              Reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link
                to="/terms"
                className="hover:text-white transition-colors duration-300 no-underline"
              >
                Terms of Service
              </Link>
              <span>•</span>
              <Link
                to="/privacy-policy"
                className="hover:text-white transition-colors duration-300 no-underline"
              >
                Privacy Policy
              </Link>
              <span>•</span>
              <Link
                to="/cookies"
                className="hover:text-white transition-colors duration-300 no-underline"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
