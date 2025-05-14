
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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-skyliving-700 font-heading font-bold text-2xl">THE SKY LIVING</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link to="/" className="font-medium text-skyliving-600 hover:text-skyliving-800 transition-colors">Home</Link>
              <Link to="/about" className="font-medium text-skyliving-600 hover:text-skyliving-800 transition-colors">About Us</Link>
              <Link to="/accommodations" className="font-medium text-skyliving-600 hover:text-skyliving-800 transition-colors">PG/Hostel</Link>
              <Link to="/gallery" className="font-medium text-skyliving-600 hover:text-skyliving-800 transition-colors">Gallery</Link>
              <Link to="/contact" className="font-medium text-white bg-skyliving-600 hover:bg-skyliving-700 transition-colors px-5 py-2 rounded-md">Contact Us</Link>
            </div>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-skyliving-600 hover:text-skyliving-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-skyliving-600 hover:bg-skyliving-50" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-skyliving-600 hover:bg-skyliving-50" onClick={() => setIsOpen(false)}>
            About Us
          </Link>
          <Link to="/accommodations" className="block px-3 py-2 rounded-md text-base font-medium text-skyliving-600 hover:bg-skyliving-50" onClick={() => setIsOpen(false)}>
            PG/Hostel
          </Link>
          <Link to="/gallery" className="block px-3 py-2 rounded-md text-base font-medium text-skyliving-600 hover:bg-skyliving-50" onClick={() => setIsOpen(false)}>
            Gallery
          </Link>
          <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-skyliving-600 bg-skyliving-50 hover:bg-skyliving-100" onClick={() => setIsOpen(false)}>
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
