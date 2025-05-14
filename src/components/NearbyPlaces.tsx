
import React, { useState } from 'react';

const tabsData = [
  {
    id: "institutes",
    label: "NEARBY INSTITUTES",
    places: [
      {
        name: "H.L College Of Commerce",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1686&q=80"
      },
      {
        name: "Ahmedabad University",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1686&q=80"
      },
      {
        name: "St. Xavier's College",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1686&q=80"
      }
    ]
  },
  {
    id: "places",
    label: "NEARBY PLACES",
    places: [
      {
        name: "River Front",
        image: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      },
      {
        name: "Law Garden",
        image: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      },
      {
        name: "BRTS Station",
        image: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      }
    ]
  }
];

const NearbyPlaces = () => {
  const [activeTab, setActiveTab] = useState("institutes");
  
  const activeTabData = tabsData.find(tab => tab.id === activeTab);

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <div className="flex justify-center">
            <div className="inline-flex rounded-md shadow-sm" role="group">
              {tabsData.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  className={`px-8 py-3 text-lg font-medium focus:outline-none transition-colors ${
                    activeTab === tab.id
                      ? "bg-skyliving-700 text-white"
                      : "bg-white text-skyliving-700 hover:bg-skyliving-50"
                  } ${
                    tab.id === "institutes" ? "rounded-l-lg" : "rounded-r-lg"
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activeTabData.places.map((place, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg">
                <img 
                  src={place.image} 
                  alt={place.name} 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-white font-bold text-xl">{place.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            {tabsData.map((tab) => (
              <button
                key={tab.id}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeTab === tab.id ? "bg-skyliving-700" : "bg-skyliving-300"
                }`}
                onClick={() => setActiveTab(tab.id)}
                aria-label={`Show ${tab.label}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NearbyPlaces;
