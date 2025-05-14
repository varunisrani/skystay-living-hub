
import React from 'react';
import { Bed, Utensils, Waves, Book } from 'lucide-react';

const servicesData = [
  {
    id: 1,
    icon: <Bed className="w-8 h-8 text-skyliving-600" />,
    title: "GYM",
    description: "Stay fit with our fully-equipped gym facilities."
  },
  {
    id: 2,
    icon: <Utensils className="w-8 h-8 text-skyliving-600" />,
    title: "MEALS: BREAKFAST, LUNCH, SNACKS, DINNER",
    description: "Enjoy nutritious and delicious meals throughout the day."
  },
  {
    id: 3,
    icon: <Waves className="w-8 h-8 text-skyliving-600" />,
    title: "LAUNDRY SERVICE WITH IRONING",
    description: "Comprehensive laundry service to keep your clothes clean and pressed."
  },
  {
    id: 4,
    icon: <Waves className="w-8 h-8 text-skyliving-600" />,
    title: "24X7 HOT & COLD WATER",
    description: "Constant supply of hot and cold water at your convenience."
  },
  {
    id: 5,
    icon: <Book className="w-8 h-8 text-skyliving-600" />,
    title: "AIR CONDITIONING LIBRARY",
    description: "Study in comfort with our air-conditioned library facilities."
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">OUR SERVICES</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div 
              key={service.id}
              className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="mb-6 flex justify-center">
                <div className="bg-skyliving-50 p-4 rounded-full">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-skyliving-700">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
