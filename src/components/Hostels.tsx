
import React from 'react';
import { Link } from 'react-router-dom';

const hostelData = [
  {
    id: 1,
    name: "SKY BOYS PG/HOSTEL",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/accommodations/sky-boys"
  },
  {
    id: 2,
    name: "SHIV KEDAR BOYS PG/HOSTEL",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/accommodations/shiv-kedar"
  },
  {
    id: 3,
    name: "AKARIA HOUSE",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/accommodations/akaria-house"
  },
  {
    id: 4,
    name: "DREAM HOUSE BOYS PG/HOSTEL",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/accommodations/dream-house"
  },
  {
    id: 5,
    name: "SHIV SHANKAR BOYS PG/HOSTEL",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/accommodations/shiv-shankar"
  },
  {
    id: 6,
    name: "PARVATI HOUSE",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/accommodations/parvati-house"
  }
];

const Hostels = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">OUR HOSTEL/PG</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hostelData.map((hostel) => (
            <Link 
              to={hostel.link} 
              key={hostel.id}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative overflow-hidden">
                <div className="aspect-[4/3]">
                  <img 
                    src={hostel.image} 
                    alt={hostel.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-center text-skyliving-700">{hostel.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hostels;
