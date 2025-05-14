
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gray-100 flex items-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-skyliving-900/90 to-skyliving-900/70 z-0"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center z-[-1]"></div>
      
      <div className="container mx-auto px-4 z-10 py-20 md:py-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
                Welcome to <span className="text-skyliving-100">The Sky Living</span>
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 font-heading">
                Experience a New Level of Convenience
              </h2>
              <p className="text-xl text-gray-200 mb-8">
                Welcome to The SkyLiving, where exceptional hostel/PG living awaits you. 
                Step into a world of comfort, community, and unforgettable experiences. 
                Our carefully curated accommodations provide a sanctuary in the sky, 
                offering a perfect balance between comfort and adventure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/accommodations" className="inline-block bg-skyliving-600 hover:bg-skyliving-700 text-white font-medium py-3 px-6 rounded-md transition-colors text-center">
                  Explore Our Accommodations
                </Link>
                <Link to="/contact" className="inline-block bg-white hover:bg-gray-100 text-skyliving-700 font-medium py-3 px-6 rounded-md transition-colors text-center">
                  Contact Us
                </Link>
              </div>
            </div>
            
            <div className="hidden md:block">
              {/* This div is intentionally left empty for the background image */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
