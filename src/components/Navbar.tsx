
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import PgTypeSelection from './PgTypeSelection';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-3xl font-heading font-bold transition-colors duration-300 text-skyliving-700">THE SKY LIVING</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-10">
              <Link to="/" className="font-medium transition-colors text-gray-700 hover:text-skyliving-600">Home</Link>
              <Link to="/about" className="font-medium transition-colors text-gray-700 hover:text-skyliving-600">About Us</Link>
              
              {/* Boys PG Dropdown */}
              <PgTypeSelection 
                type="boys" 
                triggerElement={
                  <span className="font-medium transition-colors text-gray-700 hover:text-skyliving-600 cursor-pointer">
                    Boys PG
                  </span>
                } 
              />

              {/* Girls PG Dropdown */}
              <PgTypeSelection 
                type="girls" 
                triggerElement={
                  <span className="font-medium transition-colors text-gray-700 hover:text-skyliving-600 cursor-pointer">
                    Girls PG
                  </span>
                } 
              />
              
              <Link to="/gallery" className="font-medium transition-colors text-gray-700 hover:text-skyliving-600">Gallery</Link>
              <Link to="/contact" className="font-medium transition-all px-6 py-2.5 rounded-full shadow-md bg-skyliving-600 text-white hover:bg-skyliving-700">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md transition-colors text-gray-700 hover:bg-gray-100"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" aria-hidden="true" /> : <Menu className="block h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          <Link to="/" className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:bg-skyliving-50 transition-colors" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/about" className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:bg-skyliving-50 transition-colors" onClick={() => setIsOpen(false)}>
            About Us
          </Link>
          
          {/* Mobile Boys PG Link */}
          <Link to="/boys-accommodations" className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:bg-skyliving-50 transition-colors" onClick={() => setIsOpen(false)}>
            Boys PG/Hostel
          </Link>
          
          {/* Mobile Girls PG Link */}
          <Link to="/girls-accommodations" className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:bg-skyliving-50 transition-colors" onClick={() => setIsOpen(false)}>
            Girls PG/Hostel
          </Link>
          
          <Link to="/gallery" className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:bg-skyliving-50 transition-colors" onClick={() => setIsOpen(false)}>
            Gallery
          </Link>
          <Link to="/contact" className="block px-4 py-3 rounded-lg text-base font-medium text-white bg-skyliving-600 hover:bg-skyliving-700 transition-colors" onClick={() => setIsOpen(false)}>
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
