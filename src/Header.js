import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-black p-4"> {/* Change bg-green-300 to bg-blue-300 */}
      <div className="container mx-auto flex justify-between items-center">
        {/* Company Logo */}
        <h1 className="text-3xl font-semibold text-white">
          <Link to="/">Construction Company</Link>
        </h1>

        {/* Navbar Menu (Desktop) */}
        <nav className="hidden md:flex items-center space-x-4">
          <Link to="/" className="text-white">Home</Link>
          <Link to="/about" className="text-white">About Us</Link>
          <Link to="/services" className="text-white">Services</Link>
          <Link to="/contact" className="text-white">Contact</Link>
        </nav>

        {/* Mobile Menu Toggle (Hamburger Icon) */}
        <div className="md:hidden flex items-center">
          <button
            id="menu-toggle"
            className="text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Hidden by default) */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-blue-500 p-4">
          <div className="container mx-auto flex flex-col items-center space-y-4">
            <Link to="/" className="text-white">Home</Link>
            <Link to="/about" className="text-white">About Us</Link>
            <Link to="/services" className="text-white">Services</Link>
            <Link to="/contact" className="text-white">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
