
import React, { useState } from 'react';

const tabsData = [
  {
    id: "institutes",
    label: "NEARBY INSTITUTES",
    places: [
      {
        name: "H.L College Of Commerce",
        distance: "0.5 km",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1"
      },
      {
        name: "Ahmedabad University",
        distance: "1.2 km",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1"
      },
      {
        name: "St. Xavier's College",
        distance: "0.8 km",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1"
      }
    ]
  },
  {
    id: "places",
    label: "NEARBY PLACES",
    places: [
      {
        name: "River Front",
        distance: "2.5 km",
        image: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-1.2.1"
      },
      {
        name: "Law Garden",
        distance: "1.5 km",
        image: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?ixlib=rb-1.2.1"
      },
      {
        name: "BRTS Station",
        distance: "0.3 km",
        image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-1.2.1"
      }
    ]
  }
];

const NearbyPlaces = () => {
  const [activeTab, setActiveTab] = useState("institutes");
  
  const activeTabData = tabsData.find(tab => tab.id === activeTab);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-skyliving-700 font-heading">Prime Location</h2>
          <div className="w-24 h-1 bg-skyliving-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">Strategically located near educational institutions and important landmarks.</p>
        </div>
      
        <div className="mb-12">
          <div className="flex justify-center">
            <div className="inline-flex rounded-full shadow-lg overflow-hidden p-1 bg-white" role="group">
              {tabsData.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  className={`px-8 py-4 text-lg font-medium focus:outline-none transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-skyliving-600 text-white rounded-full shadow-md"
                      : "bg-white text-skyliving-700 hover:bg-gray-50"
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {activeTabData && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {activeTabData.places.map((place, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <img 
                  src={place.image} 
                  alt={place.name} 
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end">
                  <div className="p-8">
                    <h3 className="text-white font-bold text-2xl mb-2">{place.name}</h3>
                    <div className="flex items-center text-white/80">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{place.distance}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default NearbyPlaces;
