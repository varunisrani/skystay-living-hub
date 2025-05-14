
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-skyliving-900/90 to-skyliving-800/70 z-0"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3')] bg-cover bg-center z-[-1]"></div>
      
      <div className="container mx-auto px-4 z-10 py-20 md:py-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-heading">
                Welcome to <span className="text-skyliving-100">The Sky Living</span>
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 font-heading">
                Experience a New Level of Convenience
              </h2>
              <p className="text-xl text-gray-100 mb-10 leading-relaxed">
                Welcome to The SkyLiving, where exceptional hostel/PG living awaits you. 
                Step into a world of comfort, community, and unforgettable experiences. 
                Our carefully curated accommodations provide a sanctuary in the sky.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/accommodations" className="inline-block bg-white hover:bg-gray-100 text-skyliving-700 font-medium py-4 px-8 rounded-full transition-all duration-300 shadow-lg text-center">
                  Explore Accommodations
                </Link>
                <Link to="/contact" className="inline-block bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium py-4 px-8 rounded-full transition-all duration-300 text-center">
                  Contact Us
                </Link>
              </div>
            </div>
            
            <div className="hidden md:block relative">
              <div className="absolute -top-12 -right-12 w-72 h-72 bg-skyliving-600/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-12 -left-12 w-80 h-80 bg-skyliving-400/20 rounded-full blur-3xl"></div>
              <div className="relative bg-white/10 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-white/20">
                <img 
                  src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3" 
                  alt="Premium accommodation" 
                  className="w-full h-80 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
