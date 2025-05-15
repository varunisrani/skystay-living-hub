
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
              <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-8">Premium PG & Hostel Accommodations</span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-heading">
                Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-skyliving-100">The Sky Living</span>
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
                <Button asChild size="lg" className="bg-white hover:bg-gray-100 text-skyliving-700 rounded-full py-6 px-8 font-medium">
                  <Link to="/accommodations">
                    Explore Accommodations
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white/10 rounded-full py-6 px-8 font-medium">
                  <Link to="/contact" className="flex items-center gap-2">
                    Contact Us
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
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
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="bg-skyliving-100 p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-skyliving-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-skyliving-700">Premium</p>
                      <p className="text-sm text-gray-500">Quality Living</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
