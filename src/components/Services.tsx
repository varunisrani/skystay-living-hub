import React from 'react';
import { Dumbbell, Utensils, Bath, Droplets, Book } from 'lucide-react';

const servicesData = [
  {
    id: 1,
    icon: <Dumbbell className="w-12 h-12 text-skyliving-600" />,
    title: "GYM",
    description: "Stay fit with our state-of-the-art gym facilities equipped with modern machines."
  },
  {
    id: 2,
    icon: <Utensils className="w-12 h-12 text-skyliving-600" />,
    title: "GOURMET MEALS",
    description: "Enjoy nutritious and delicious meals prepared by professional chefs throughout the day."
  },
  {
    id: 3,
    icon: <Bath className="w-12 h-12 text-skyliving-600" />,
    title: "LAUNDRY SERVICE",
    description: "Comprehensive laundry service with professional ironing to keep your clothes fresh and crisp."
  },
  {
    id: 4,
    icon: <Droplets className="w-12 h-12 text-skyliving-600" />,
    title: "24×7 HOT & COLD WATER",
    description: "Constant supply of hot and cold water at your convenience throughout the day and night."
  },
  {
    id: 5,
    icon: <Book className="w-12 h-12 text-skyliving-600" />,
    title: "AIR-CONDITIONED LIBRARY",
    description: "Quiet, comfortable air-conditioned library with a wide selection of books and study materials."
  }
];

const Services = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-skyliving-700 font-heading">Our Premium Services</h2>
          <div className="w-24 h-1 bg-skyliving-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Experience luxury living with our comprehensive range of premium services designed for your comfort.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {servicesData.map((service) => (
            <div 
              key={service.id}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="p-6 flex flex-col items-center">
                <div className="mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-skyliving-700 group-hover:text-skyliving-600 transition-colors">{service.title}</h3>
                <p className="text-gray-600 text-sm text-center">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
