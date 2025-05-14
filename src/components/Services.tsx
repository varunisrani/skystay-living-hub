
import React from 'react';
import { Dumbbell, Utensils, Bath, Droplets, Book } from 'lucide-react';

const servicesData = [
  {
    id: 1,
    icon: <Dumbbell className="w-10 h-10 text-white" />,
    title: "GYM",
    description: "Stay fit with our state-of-the-art gym facilities equipped with modern machines."
  },
  {
    id: 2,
    icon: <Utensils className="w-10 h-10 text-white" />,
    title: "GOURMET MEALS",
    description: "Enjoy nutritious and delicious meals prepared by professional chefs throughout the day."
  },
  {
    id: 3,
    icon: <Bath className="w-10 h-10 text-white" />,
    title: "LAUNDRY SERVICE",
    description: "Comprehensive laundry service with professional ironing to keep your clothes fresh and crisp."
  },
  {
    id: 4,
    icon: <Droplets className="w-10 h-10 text-white" />,
    title: "24×7 HOT & COLD WATER",
    description: "Constant supply of hot and cold water at your convenience throughout the day and night."
  },
  {
    id: 5,
    icon: <Book className="w-10 h-10 text-white" />,
    title: "AIR-CONDITIONED LIBRARY",
    description: "Quiet, comfortable air-conditioned library with a wide selection of books and study materials."
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-skyliving-700 font-heading">Our Premium Services</h2>
          <div className="w-24 h-1 bg-skyliving-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">Experience luxury living with our comprehensive range of premium services designed for your comfort.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div 
              key={service.id}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="bg-gradient-to-r from-skyliving-600 to-skyliving-700 p-6 flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full">
                  {service.icon}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-skyliving-700 group-hover:text-skyliving-600 transition-colors">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
