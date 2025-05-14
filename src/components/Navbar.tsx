
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className={`text-3xl font-heading font-bold transition-colors duration-300 ${scrolled ? 'text-skyliving-700' : 'text-white'}`}>THE SKY LIVING</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-10">
              <Link to="/" className={`font-medium transition-colors ${scrolled ? 'text-skyliving-600 hover:text-skyliving-800' : 'text-white hover:text-white/80'}`}>Home</Link>
              <Link to="/about" className={`font-medium transition-colors ${scrolled ? 'text-skyliving-600 hover:text-skyliving-800' : 'text-white hover:text-white/80'}`}>About Us</Link>
              <Link to="/accommodations" className={`font-medium transition-colors ${scrolled ? 'text-skyliving-600 hover:text-skyliving-800' : 'text-white hover:text-white/80'}`}>PG/Hostel</Link>
              <Link to="/gallery" className={`font-medium transition-colors ${scrolled ? 'text-skyliving-600 hover:text-skyliving-800' : 'text-white hover:text-white/80'}`}>Gallery</Link>
              <Link to="/contact" className={`font-medium transition-all px-6 py-2.5 rounded-full shadow-md ${scrolled ? 'bg-skyliving-600 text-white hover:bg-skyliving-700' : 'bg-white text-skyliving-700 hover:bg-white/90'}`}>Contact Us</Link>
            </div>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors ${scrolled ? 'text-skyliving-600 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
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
          <Link to="/" className="block px-4 py-3 rounded-lg text-base font-medium text-skyliving-600 hover:bg-skyliving-50 transition-colors" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/about" className="block px-4 py-3 rounded-lg text-base font-medium text-skyliving-600 hover:bg-skyliving-50 transition-colors" onClick={() => setIsOpen(false)}>
            About Us
          </Link>
          <Link to="/accommodations" className="block px-4 py-3 rounded-lg text-base font-medium text-skyliving-600 hover:bg-skyliving-50 transition-colors" onClick={() => setIsOpen(false)}>
            PG/Hostel
          </Link>
          <Link to="/gallery" className="block px-4 py-3 rounded-lg text-base font-medium text-skyliving-600 hover:bg-skyliving-50 transition-colors" onClick={() => setIsOpen(false)}>
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
