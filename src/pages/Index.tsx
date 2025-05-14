
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
    <div>
      <Hero />
      <Stats />
      <LiveInStyle />
      <Hostels />
      <Services />
      <NearbyPlaces />
      <Testimonials />
    </div>
  );
};

export default Index;
