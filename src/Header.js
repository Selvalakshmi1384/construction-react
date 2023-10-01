import React, { useState } from 'react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        
        <h1 className="text-3xl font-semibold text-white">
          <a href="/home">Selva's Construction</a>
        </h1>

        <nav className="hidden md:flex items-center space-x-4">
          <a href="/" className="text-white">Home</a>
          <a href="/about" className="text-white">About Us</a>
          <a href="/services" className="text-white">Services</a>
          <a href="/contact" className="text-white">Contact</a>
        </nav>

        <div className="flex items-center space-x-4">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 2H19C20.1046 2 21 2.89543 21 4V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V4C3 2.89543 3.89543 2 5 2Z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11.37C16.1234 11.1237 16.1234 10.8763 16 10.63M12 8C10.4599 8 9.02082 8.52678 7.87868 9.60557C6.73734 10.6844 6 12.2202 6 14C6 15.7798 6.73734 17.3156 7.87868 18.3944C9.02082 19.4732 10.4599 20 12 20C13.5401 20 14.9792 19.4732 16.1213 18.3944C17.2627 17.3156 18 15.7798 18 14C18 12.2202 17.2627 10.6844 16.1213 9.60557C14.9792 8.52678 13.5401 8 12 8Z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.5 6.5H17.51"></path>
            </svg>
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 2H19C20.1046 2 21 2.89543 21 4V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V4C3 2.89543 3.89543 2 5 2Z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V21"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4V7"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 16C14.2112 16 16 14.2112 16 12C16 9.78877 14.2112 8 12 8C9.78877 8 8 9.78877 8 12C8 14.2112 9.78877 16 12 16Z"></path>
            </svg>
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19.01V14M5 10.9999L9 14L5 17V10.9999Z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19.01V14M19 10.9999L15 14L19 17V10.9999Z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"></path>
            </svg>
          </a>
        </div>
        
        <div className="md:hidden flex items-center">
          <button
            id="menu-toggle"
            className="text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="bg-black p-4">
          <div className="container mx-auto flex flex-col items-center space-y-4">
            <a href="#home" className="text-white" onClick={toggleMobileMenu}>Home</a>
            <a href="#about" className="text-white" onClick={toggleMobileMenu}>About Us</a>
            <a href="#services" className="text-white" onClick={toggleMobileMenu}>Services</a>
            <a href="#contact" className="text-white" onClick={toggleMobileMenu}>Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
