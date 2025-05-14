
import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import LiveInStyle from '../components/LiveInStyle';
import Hostels from '../components/Hostels';
import Services from '../components/Services';
import NearbyPlaces from '../components/NearbyPlaces';
import Testimonials from '../components/Testimonials';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'The Sky Living | Premium PG & Hostel Accommodations';
  }, []);

  return (
    <div className="bg-white">
      <Hero />
      <Stats />
      <LiveInStyle />
      <Hostels />
      <Services />
      <NearbyPlaces />
      <Testimonials />
      
      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-skyliving-700 to-skyliving-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Ready to Experience Premium Living?</h2>
            <p className="text-xl mb-10 text-white/80 max-w-2xl mx-auto">
              Join our community of students enjoying the best accommodation experience. Contact us today to book your visit!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a href="/contact" className="inline-block bg-white hover:bg-gray-100 text-skyliving-700 font-medium py-4 px-8 rounded-full transition-all duration-300 shadow-lg text-center">
                Contact Us
              </a>
              <a href="/accommodations" className="inline-block bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium py-4 px-8 rounded-full transition-all duration-300 text-center">
                View Accommodations
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
