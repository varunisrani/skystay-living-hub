
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const accommodationsData = [
  {
    id: 1,
    name: "Dream House Boys PG/Hostel",
    code: "TSL-6",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: ["Boys Accommodation", "Safe and Sanitized", "2, 3 and 4 Sharing"],
    address: "13 Falgun Society, Opp. Honest Restaurant, B/H. AG Teachers School, Nr. Hanumanji Mandir Commerce Six Road Navrangpura.",
    contact: "+91 9784034279",
    email: "info@skyliving.co.in"
  },
  {
    id: 2,
    name: "Sky Boys PG/Hostel",
    code: "TSL-4",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: ["Boys Accommodation", "Safe and Sanitized", "2, 3 and 4 Sharing"],
    address: "Near St. Xavier's College, Navrangpura, Ahmedabad",
    contact: "+91 9784034279",
    email: "info@skyliving.co.in"
  },
  {
    id: 3,
    name: "Shiv Kedar Boys PG/Hostel",
    code: "TSL-2",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: ["Boys Accommodation", "Safe and Sanitized", "2, 3 and 4 Sharing"],
    address: "Navrangpura, Ahmedabad",
    contact: "+91 9784034279",
    email: "info@skyliving.co.in"
  },
  {
    id: 4,
    name: "Shiv Shankar Boys PG/Hostel",
    code: "TSL-3",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: ["Boys Accommodation", "Safe and Sanitized", "2, 3 and 4 Sharing"],
    address: "Navrangpura, Ahmedabad",
    contact: "+91 9784034279",
    email: "info@skyliving.co.in"
  },
  {
    id: 5,
    name: "Akaria House",
    code: "TSL-8",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: ["Modern Accommodation", "Safe and Sanitized", "2, 3 and 4 Sharing"],
    address: "Navrangpura, Ahmedabad",
    contact: "+91 9784034279",
    email: "info@skyliving.co.in"
  },
  {
    id: 6,
    name: "Parvati House",
    code: "TSL-5",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: ["Modern Accommodation", "Safe and Sanitized", "2, 3 and 4 Sharing"],
    address: "Navrangpura, Ahmedabad",
    contact: "+91 9784034279",
    email: "info@skyliving.co.in"
  }
];

const roomAmenities = [
  { name: "Spacious Wardrobe & Extra Storage Space", icon: "📦" },
  { name: "AC & NON AC Rooms", icon: "❄️" },
  { name: "Bed With Comfy Mattress", icon: "🛏️" },
  { name: "Hot & Cold Water Service", icon: "🚿" },
  { name: "Attached Washroom", icon: "🚽" }
];

const commonAmenities = [
  { name: "Hygienic & Delicious Food", icon: "🍽️" },
  { name: "Housekeeping", icon: "🧹" },
  { name: "24/7 Security", icon: "🛡️" },
  { name: "High Speed Internet", icon: "🌐" },
  { name: "Transport On Call", icon: "🚗" },
  { name: "Laundry Service", icon: "👕" },
  { name: "24X7 CCTV Surveillance", icon: "📹" },
  { name: "Parking", icon: "🅿️" }
];

const Accommodations = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Our Accommodations | The Sky Living';
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-skyliving-800">
        <div className="absolute inset-0 bg-skyliving-800 opacity-90 z-0"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center mix-blend-overlay z-[-1]"></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-5xl font-bold text-white mb-6 font-heading">OUR PG/HOSTELS</h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Explore our range of premium hostels and PGs designed to provide you the ultimate comfort and convenience.
          </p>
        </div>
      </section>

      {/* Accommodations List */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {accommodationsData.map((accommodation) => (
              <div key={accommodation.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="md:flex">
                  <div className="md:w-2/5">
                    <img 
                      src={accommodation.image} 
                      alt={accommodation.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-3/5 p-6">
                    <h3 className="text-2xl font-bold mb-2 text-skyliving-700">{accommodation.name}</h3>
                    <p className="text-skyliving-500 font-medium mb-4">({accommodation.code})</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {accommodation.features.map((feature, index) => (
                        <span key={index} className="bg-skyliving-100 text-skyliving-700 px-3 py-1 rounded-full text-sm">
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      <p className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-skyliving-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                          <circle cx="12" cy="10" r="3"/>
                        </svg>
                        <span className="text-gray-700">{accommodation.address}</span>
                      </p>
                      <p className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-skyliving-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                        </svg>
                        <span className="text-gray-700">{accommodation.contact}</span>
                      </p>
                      <p className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-skyliving-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect width="20" height="16" x="2" y="4" rx="2"/>
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                        </svg>
                        <span className="text-gray-700">{accommodation.email}</span>
                      </p>
                    </div>
                    
                    <Link to={`/accommodations/${accommodation.id}`} className="inline-block bg-skyliving-600 hover:bg-skyliving-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-skyliving-700 mb-6 text-center font-heading">ROOM AMENITIES</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {roomAmenities.map((amenity, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-3xl mb-4">{amenity.icon}</div>
                  <h3 className="font-medium text-skyliving-700">{amenity.name}</h3>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-4xl font-bold text-skyliving-700 mb-6 text-center font-heading">COMMON AMENITIES</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {commonAmenities.map((amenity, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-3xl mb-4">{amenity.icon}</div>
                  <h3 className="font-medium text-skyliving-700">{amenity.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-skyliving-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 font-heading">Ready to Join Our Community?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Experience the comfort, convenience, and community at The Sky Living. 
            Contact us today to secure your spot!
          </p>
          <Link to="/contact" className="inline-block bg-white text-skyliving-700 hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition-colors">
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Accommodations;
