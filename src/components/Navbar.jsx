import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav
      style={{ backgroundColor: "#0f1e5c" }}
      className="shadow-lg fixed w-full top-0 z-50 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Brand (Logo + Name) */}
          <div className="flex items-center space-x-2">
            <img
              src="/logo (2).png"
              alt="Brilaps Logo"
              className="w-8 h-8"   // 32px max
            />
            <span className="text-lg font-semibold">Brilaps</span> {/* 18px font */}
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#home"
                className="hover:text-blue-400 px-3 py-2 text-sm font-medium"
              >
                Home
              </a>
              <a
                href="#who-am"
                className="hover:text-blue-400 px-3 py-2 text-sm font-medium"
              >
                Who Am I
              </a>
              <a
                href="#work"
                className="hover:text-blue-400 px-3 py-2 text-sm font-medium"
              >
                Work
              </a>
              <a
                href="#reviews"
                className="hover:text-blue-400 px-3 py-2 text-sm font-medium"
              >
                Reviews
              </a>
              <a
                href="#contact"
                className="hover:text-blue-400 px-3 py-2 text-sm font-medium"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3">
            <a
              href="#home"
              className="block px-3 py-2 text-gray-700"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="#who-am"
              className="block px-3 py-2 text-gray-700"
              onClick={toggleMenu}
            >
              Who Am I
            </a>
            <a
              href="#work"
              className="block px-3 py-2 text-gray-700"
              onClick={toggleMenu}
            >
              Work
            </a>
            <a
              href="#reviews"
              className="block px-3 py-2 text-gray-700"
              onClick={toggleMenu}
            >
              Reviews
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-gray-700"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
