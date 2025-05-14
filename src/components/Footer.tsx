
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Top section with gradient divider */}
        <div className="relative pb-16">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-skyliving-400 via-skyliving-600 to-skyliving-400"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* About */}
            <div>
              <h3 className="text-2xl font-heading font-bold mb-6">THE SKY LIVING</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Experience a new level of convenience with our premium PG and hostel accommodations for students.
                We provide a safe, comfortable, and enriching living environment.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-skyliving-400 transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-300 hover:text-skyliving-400 transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-300 hover:text-skyliving-400 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-300 hover:text-skyliving-400 transition-colors">
                  <Youtube size={20} />
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-white transition-colors hover:pl-2 block">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-300 hover:text-white transition-colors hover:pl-2 block">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/accommodations" className="text-gray-300 hover:text-white transition-colors hover:pl-2 block">
                    PG/Hostel
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="text-gray-300 hover:text-white transition-colors hover:pl-2 block">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-white transition-colors hover:pl-2 block">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Our Hostels */}
            <div>
              <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Our Hostels</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors hover:pl-2 block">
                    Sky Boys PG/Hostel
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors hover:pl-2 block">
                    Shiv Kedar Boys PG/Hostel
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors hover:pl-2 block">
                    Akaria House
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors hover:pl-2 block">
                    Dream House Boys PG/Hostel
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors hover:pl-2 block">
                    Shiv Shankar Boys PG/Hostel
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors hover:pl-2 block">
                    Parvati House
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Contact Information */}
            <div>
              <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Contact Information</h4>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 mt-1 text-skyliving-400" />
                  <span className="text-gray-300">Head Office: Near HDFC Bank, Opp. Wagh bakri tea lounge, St. Xaviers College, HL College Road Navrangpura.</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-skyliving-400" />
                  <span className="text-gray-300">+91 88661 17703 / +91 87358 61665</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-skyliving-400" />
                  <span className="text-gray-300">info@skyliving.co.in</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">© {new Date().getFullYear()} The Sky Living. All rights reserved.</p>
            <ul className="flex space-x-8">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
