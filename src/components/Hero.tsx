
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative bg-white flex items-center py-28 md:py-32 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-[0.03]"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 animate-fade-in">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 rounded-full bg-skyliving-100 text-skyliving-700 text-sm font-medium tracking-wide">Premium PG & Hostel Accommodations</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 font-heading leading-tight tracking-tight">
                Welcome to <span className="text-gradient">The Sky Living</span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 font-heading tracking-tight">
                Experience a New Level of Convenience
              </h2>
              
              <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-2xl">
                Welcome to The SkyLiving, where exceptional hostel/PG living awaits you. 
                Step into a world of comfort, community, and unforgettable experiences. 
                Our carefully curated accommodations provide a sanctuary in the sky.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5">
                <Button asChild size="lg" className="bg-skyliving-600 hover:bg-skyliving-700 text-white rounded-full py-6 px-8 font-medium shadow-md transition-all duration-300 hover:shadow-lg">
                  <Link to="/accommodations">
                    Explore Accommodations
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-2 border-skyliving-600 text-skyliving-600 hover:bg-skyliving-50 rounded-full py-6 px-8 font-medium shadow-sm transition-all duration-300 hover:shadow-md">
                  <Link to="/contact" className="flex items-center gap-2">
                    Contact Us
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="hidden lg:block lg:col-span-5 relative">
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-skyliving-100/60 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-12 -left-12 w-72 h-72 bg-skyliving-200/50 rounded-full blur-3xl"></div>
              
              <div className="relative bg-white p-4 rounded-3xl shadow-premium border border-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3" 
                  alt="Premium accommodation" 
                  className="w-full h-[400px] object-cover rounded-2xl"
                />
                
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="bg-skyliving-50 p-3 rounded-full shadow-inner">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-skyliving-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
