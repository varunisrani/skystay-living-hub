
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

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

  // Determine text color based on page and scroll state
  const getTextColor = () => {
    if (scrolled) {
      return 'text-skyliving-700';  // Dark text when navbar has background
    } else {
      return isHomePage ? 'text-white' : 'text-skyliving-700'; // White on home, dark on other pages
    }
  };

  const getLinkColor = () => {
    if (scrolled) {
      return 'text-skyliving-800 hover:text-skyliving-900';
    } else {
      return isHomePage ? 'text-white hover:text-white/80' : 'text-skyliving-800 hover:text-skyliving-900';
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : isHomePage ? 'bg-transparent py-4' : 'bg-white py-4 shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className={`text-3xl font-heading font-bold transition-colors duration-300 ${getTextColor()}`}>THE SKY LIVING</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-10">
              <Link to="/" className={`font-medium transition-colors ${getLinkColor()}`}>Home</Link>
              <Link to="/about" className={`font-medium transition-colors ${getLinkColor()}`}>About Us</Link>
              <Link to="/accommodations" className={`font-medium transition-colors ${getLinkColor()}`}>PG/Hostel</Link>
              <Link to="/gallery" className={`font-medium transition-colors ${getLinkColor()}`}>Gallery</Link>
              <Link to="/contact" className={`font-medium transition-all px-6 py-2.5 rounded-full shadow-md ${scrolled ? 'bg-skyliving-600 text-white hover:bg-skyliving-700' : isHomePage ? 'bg-white text-skyliving-700 hover:bg-white/90' : 'bg-skyliving-600 text-white hover:bg-skyliving-700'}`}>Contact Us</Link>
            </div>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors ${scrolled ? 'text-skyliving-800 hover:bg-gray-100' : isHomePage ? 'text-white hover:bg-white/10' : 'text-skyliving-800 hover:bg-gray-100'}`}
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
          <Link to="/" className="block px-4 py-3 rounded-lg text-base font-medium text-skyliving-800 hover:bg-skyliving-50 transition-colors" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/about" className="block px-4 py-3 rounded-lg text-base font-medium text-skyliving-800 hover:bg-skyliving-50 transition-colors" onClick={() => setIsOpen(false)}>
            About Us
          </Link>
          <Link to="/accommodations" className="block px-4 py-3 rounded-lg text-base font-medium text-skyliving-800 hover:bg-skyliving-50 transition-colors" onClick={() => setIsOpen(false)}>
            PG/Hostel
          </Link>
          <Link to="/gallery" className="block px-4 py-3 rounded-lg text-base font-medium text-skyliving-800 hover:bg-skyliving-50 transition-colors" onClick={() => setIsOpen(false)}>
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
