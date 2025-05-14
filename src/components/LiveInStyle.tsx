
import React from 'react';
import { Check } from 'lucide-react';

const LiveInStyle = () => {
  const features = [
    "Modern and comfortable living spaces designed for students",
    "Premium amenities to enhance your living experience",
    "Strategic locations near educational institutions",
    "Safe and secure environment with 24/7 staff support",
    "High-speed Wi-Fi throughout the premises",
    "Regular maintenance and housekeeping services"
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-skyliving-600/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-skyliving-400/10 rounded-full blur-3xl"></div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3" 
                  alt="Comfortable PG accommodation" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-2xl overflow-hidden shadow-xl transform rotate-6">
                <img 
                  src="https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-4.0.3" 
                  alt="Modern student space" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div>
            <div className="inline-block px-4 py-2 bg-skyliving-600/10 text-skyliving-700 rounded-full mb-6 font-medium">Premium Experience</div>
            <h2 className="text-4xl md:text-5xl font-bold text-skyliving-700 mb-8 font-heading leading-tight">
              Live in Style and Comfort
            </h2>
            <p className="text-xl text-gray-700 mb-10 leading-relaxed">
              Our exquisite accommodations offer a seamless blend of style, elegance, 
              and functionality, providing you with a haven you can truly call home.
              Experience the perfect balance of privacy and community in our thoughtfully designed spaces.
            </p>
            <ul className="space-y-6">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="shrink-0 mr-4 bg-skyliving-100 rounded-full p-1">
                    <Check className="h-6 w-6 text-skyliving-600" strokeWidth={3} />
                  </div>
                  <span className="text-lg text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveInStyle;
