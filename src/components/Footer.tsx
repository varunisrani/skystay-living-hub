
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-skyliving-600 to-skyliving-800">THE SKY LIVING</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Experience a new level of convenience with our premium PG and hostel accommodations for students.
              We provide a safe, comfortable, and enriching living environment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-skyliving-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-skyliving-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-skyliving-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-skyliving-600 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider text-skyliving-700">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-600 hover:text-skyliving-600 transition-colors hover:translate-x-1 transform duration-200 flex items-center">
                  <span className="inline-block w-1 h-1 rounded-full bg-skyliving-500 mr-2"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-skyliving-600 transition-colors hover:translate-x-1 transform duration-200 flex items-center">
                  <span className="inline-block w-1 h-1 rounded-full bg-skyliving-500 mr-2"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/accommodations" className="text-gray-600 hover:text-skyliving-600 transition-colors hover:translate-x-1 transform duration-200 flex items-center">
                  <span className="inline-block w-1 h-1 rounded-full bg-skyliving-500 mr-2"></span>
                  PG/Hostel
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-600 hover:text-skyliving-600 transition-colors hover:translate-x-1 transform duration-200 flex items-center">
                  <span className="inline-block w-1 h-1 rounded-full bg-skyliving-500 mr-2"></span>
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-skyliving-600 transition-colors hover:translate-x-1 transform duration-200 flex items-center">
                  <span className="inline-block w-1 h-1 rounded-full bg-skyliving-500 mr-2"></span>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Our Hostels */}
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider text-skyliving-700">Our Hostels</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-skyliving-600 transition-colors hover:translate-x-1 transform duration-200 flex items-center">
                  <span className="inline-block w-1 h-1 rounded-full bg-skyliving-500 mr-2"></span>
                  Sky Boys PG/Hostel
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-skyliving-600 transition-colors hover:translate-x-1 transform duration-200 flex items-center">
                  <span className="inline-block w-1 h-1 rounded-full bg-skyliving-500 mr-2"></span>
                  Shiv Kedar Boys PG/Hostel
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-skyliving-600 transition-colors hover:translate-x-1 transform duration-200 flex items-center">
                  <span className="inline-block w-1 h-1 rounded-full bg-skyliving-500 mr-2"></span>
                  Akaria House
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-skyliving-600 transition-colors hover:translate-x-1 transform duration-200 flex items-center">
                  <span className="inline-block w-1 h-1 rounded-full bg-skyliving-500 mr-2"></span>
                  Dream House Boys PG/Hostel
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-skyliving-600 transition-colors hover:translate-x-1 transform duration-200 flex items-center">
                  <span className="inline-block w-1 h-1 rounded-full bg-skyliving-500 mr-2"></span>
                  Shiv Shankar Boys PG/Hostel
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-skyliving-600 transition-colors hover:translate-x-1 transform duration-200 flex items-center">
                  <span className="inline-block w-1 h-1 rounded-full bg-skyliving-500 mr-2"></span>
                  Parvati House
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider text-skyliving-700">Contact Information</h4>
            <div className="space-y-5">
              <div className="flex items-start">
                <div className="bg-skyliving-50 p-2 rounded-lg mr-3">
                  <MapPin className="h-5 w-5 text-skyliving-600" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Head Office: Near HDFC Bank, Opp. Wagh bakri tea lounge, St. Xaviers College, HL College Road Navrangpura.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-skyliving-50 p-2 rounded-lg mr-3">
                  <Phone className="h-5 w-5 text-skyliving-600" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">+91 88661 17703</p>
                  <p className="text-gray-600 text-sm">+91 87358 61665</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-skyliving-50 p-2 rounded-lg mr-3">
                  <Mail className="h-5 w-5 text-skyliving-600" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">info@skyliving.co.in</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-gray-100 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 mb-4 md:mb-0 text-sm">© {new Date().getFullYear()} The Sky Living. All rights reserved.</p>
            <ul className="flex space-x-8">
              <li><a href="#" className="text-gray-500 hover:text-skyliving-600 text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-skyliving-600 text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-gray-500 hover:text-skyliving-600 text-sm">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
