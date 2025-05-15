
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Wifi, 
  Coffee, 
  Shield, 
  Truck, 
  ShirtIcon, 
  Video, 
  Car,
  ArrowLeft
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const accommodationsData = [
  {
    id: 1,
    name: "Dream House Boys PG/Hostel",
    code: "TSL-6",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: ["Boys Accommodation", "Safe and Sanitized", "2, 3 and 4 Sharing"],
    address: "13 Falgun Society, Opp. Honest Restaurant, B/H. AG Teachers School, Nr. Hanumanji Mandir Commerce Six Road Navrangpura.",
    contact: "+91 9784034279",
    email: "info@skyliving.co.in",
    description: "Dream House Boys PG/Hostel offers premium accommodation designed specifically for students and young professionals. Our facility provides a comfortable and conducive environment for both study and relaxation. With spacious rooms, modern amenities, and a community atmosphere, Dream House ensures you feel at home while pursuing your dreams.",
    rooms: [
      { type: "Twin Sharing", price: "₹12,000/month", availability: "Available" },
      { type: "Triple Sharing", price: "₹9,500/month", availability: "Limited" },
      { type: "Four Sharing", price: "₹8,000/month", availability: "Available" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&q=80",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-4.0.3&q=80"
    ]
  },
  {
    id: 2,
    name: "Sky Boys PG/Hostel",
    code: "TSL-4",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3",
    features: ["Boys Accommodation", "Safe and Sanitized", "2, 3 and 4 Sharing"],
    address: "Near St. Xavier's College, Navrangpura, Ahmedabad",
    contact: "+91 9784034279",
    email: "info@skyliving.co.in",
    description: "Sky Boys PG/Hostel represents the pinnacle of student living in Ahmedabad. Located strategically near St. Xavier's College, we provide modern accommodations with all amenities required for a comfortable stay. Our dedicated staff ensures that all your needs are met, allowing you to focus on your studies and personal growth.",
    rooms: [
      { type: "Twin Sharing", price: "₹12,500/month", availability: "Limited" },
      { type: "Triple Sharing", price: "₹10,000/month", availability: "Available" },
      { type: "Four Sharing", price: "₹8,500/month", availability: "Available" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&q=80",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-4.0.3&q=80"
    ]
  },
  {
    id: 3,
    name: "Shiv Kedar Boys PG/Hostel",
    code: "TSL-2",
    image: "https://images.unsplash.com/photo-1623625434462-e5e42318ae49?ixlib=rb-4.0.3",
    features: ["Boys Accommodation", "Safe and Sanitized", "2, 3 and 4 Sharing"],
    address: "Navrangpura, Ahmedabad",
    contact: "+91 9784034279",
    email: "info@skyliving.co.in",
    description: "Shiv Kedar Boys PG/Hostel combines traditional values with modern amenities to create a unique living experience. Our hostel emphasizes discipline, cleanliness, and community living while providing all the facilities needed for academic success. The serene environment makes it an ideal choice for serious students.",
    rooms: [
      { type: "Twin Sharing", price: "₹11,500/month", availability: "Available" },
      { type: "Triple Sharing", price: "₹9,000/month", availability: "Available" },
      { type: "Four Sharing", price: "₹7,500/month", availability: "Limited" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1623625434462-e5e42318ae49?ixlib=rb-4.0.3&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&q=80",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-4.0.3&q=80"
    ]
  },
  {
    id: 4,
    name: "Shiv Shankar Boys PG/Hostel",
    code: "TSL-3",
    image: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-4.0.3",
    features: ["Boys Accommodation", "Safe and Sanitized", "2, 3 and 4 Sharing"],
    address: "Navrangpura, Ahmedabad",
    contact: "+91 9784034279",
    email: "info@skyliving.co.in",
    description: "Shiv Shankar Boys PG/Hostel is known for its contemporary spaces infused with traditional values. We offer comfortable accommodation with a focus on creating a disciplined yet relaxed environment. Our location in Navrangpura provides easy access to educational institutions, shopping centers, and recreational facilities.",
    rooms: [
      { type: "Twin Sharing", price: "₹12,000/month", availability: "Limited" },
      { type: "Triple Sharing", price: "₹9,500/month", availability: "Available" },
      { type: "Four Sharing", price: "₹8,000/month", availability: "Available" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-4.0.3&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&q=80",
      "https://images.unsplash.com/photo-1623625434462-e5e42318ae49?ixlib=rb-4.0.3&q=80"
    ]
  },
  {
    id: 5,
    name: "Akaria House",
    code: "TSL-8",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3",
    features: ["Modern Accommodation", "Safe and Sanitized", "2, 3 and 4 Sharing"],
    address: "Navrangpura, Ahmedabad",
    contact: "+91 9784034279",
    email: "info@skyliving.co.in",
    description: "Akaria House stands as a symbol of luxury living with all modern amenities. Our premium accommodation ensures that residents experience comfort and convenience at every step. From spacious rooms to state-of-the-art facilities, Akaria House is designed to elevate your living standards while you focus on your academic or professional journey.",
    rooms: [
      { type: "Twin Sharing", price: "₹13,000/month", availability: "Available" },
      { type: "Triple Sharing", price: "₹10,500/month", availability: "Limited" },
      { type: "Four Sharing", price: "₹9,000/month", availability: "Available" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&q=80",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-4.0.3&q=80"
    ]
  },
  {
    id: 6,
    name: "Parvati House",
    code: "TSL-5",
    image: "https://images.unsplash.com/photo-1560185008-a9a0bb5cdfb5?ixlib=rb-4.0.3",
    features: ["Modern Accommodation", "Safe and Sanitized", "2, 3 and 4 Sharing"],
    address: "Navrangpura, Ahmedabad",
    contact: "+91 9784034279",
    email: "info@skyliving.co.in",
    description: "Parvati House offers premium accommodations in a prime location in Navrangpura. Our facility is designed keeping in mind the needs of modern students and working professionals. With a blend of comfort and functionality, Parvati House provides an environment that promotes both academic excellence and personal well-being.",
    rooms: [
      { type: "Twin Sharing", price: "₹12,500/month", availability: "Limited" },
      { type: "Triple Sharing", price: "₹10,000/month", availability: "Available" },
      { type: "Four Sharing", price: "₹8,500/month", availability: "Available" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1560185008-a9a0bb5cdfb5?ixlib=rb-4.0.3&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&q=80",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-4.0.3&q=80"
    ]
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

const AccommodationDetail = () => {
  const { id } = useParams();
  const [accommodation, setAccommodation] = useState(null);
  const [activeImage, setActiveImage] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const foundAccommodation = accommodationsData.find(a => a.id === parseInt(id));
    
    if (foundAccommodation) {
      setAccommodation(foundAccommodation);
      setActiveImage(foundAccommodation.image);
      document.title = `${foundAccommodation.name} | The Sky Living`;
    }
  }, [id]);

  if (!accommodation) {
    return (
      <div className="pt-32 pb-20 min-h-screen bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-skyliving-700">Accommodation not found</h1>
          <p className="mt-4 text-lg text-gray-600">The accommodation you're looking for doesn't exist or has been removed.</p>
          <Button asChild className="mt-8 bg-skyliving-600 hover:bg-skyliving-700">
            <Link to="/accommodations">Back to Accommodations</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <div className="mb-6">
          <Button asChild variant="outline" className="flex items-center gap-2 border-skyliving-200 hover:bg-skyliving-50 text-skyliving-700">
            <Link to="/accommodations">
              <ArrowLeft className="h-4 w-4" />
              Back to Accommodations
            </Link>
          </Button>
        </div>

        {/* Accommodation Header */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-skyliving-700 mb-2 font-heading">
            {accommodation.name}
          </h1>
          <p className="text-xl text-skyliving-500 font-medium mb-4">({accommodation.code})</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {accommodation.features.map((feature, index) => (
              <span key={index} className="bg-skyliving-50 text-skyliving-700 px-4 py-1.5 rounded-full text-sm font-medium">
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Gallery Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-12">
          <div className="lg:col-span-3">
            <div className="rounded-xl overflow-hidden bg-gray-100 aspect-[4/3]">
              <img 
                src={activeImage} 
                alt={accommodation.name} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="grid grid-cols-3 gap-3 h-full">
              {accommodation.gallery.map((img, index) => (
                <div 
                  key={index} 
                  className={`rounded-lg overflow-hidden cursor-pointer border-2 ${activeImage === img ? 'border-skyliving-500' : 'border-transparent'}`}
                  onClick={() => setActiveImage(img)}
                >
                  <img 
                    src={img} 
                    alt={`${accommodation.name} gallery ${index + 1}`} 
                    className="w-full h-full object-cover aspect-square"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Column - Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold text-skyliving-700 mb-4">About This Accommodation</h2>
              <p className="text-gray-700 leading-relaxed mb-6">{accommodation.description}</p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 text-skyliving-600 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Address</h3>
                    <p className="text-gray-700">{accommodation.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 text-skyliving-600 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Contact</h3>
                    <p className="text-gray-700">{accommodation.contact}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 text-skyliving-600 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Email</h3>
                    <p className="text-gray-700">{accommodation.email}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Room Types */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold text-skyliving-700 mb-6">Room Types & Pricing</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 bg-gray-50">Room Type</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 bg-gray-50">Monthly Rent</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 bg-gray-50">Availability</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {accommodation.rooms.map((room, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-4 py-4 text-sm text-gray-900">{room.type}</td>
                        <td className="px-4 py-4 text-sm text-gray-900 font-medium">{room.price}</td>
                        <td className="px-4 py-4 text-sm">
                          <span 
                            className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${
                              room.availability === 'Available' 
                                ? 'bg-green-50 text-green-700' 
                                : room.availability === 'Limited' 
                                  ? 'bg-yellow-50 text-yellow-700'
                                  : 'bg-red-50 text-red-700'
                            }`}
                          >
                            {room.availability}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-skyliving-700 mb-6">Amenities</h2>
              
              <h3 className="text-xl font-semibold text-skyliving-600 mb-4">Room Amenities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {roomAmenities.map((amenity, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-xl mr-3">{amenity.icon}</span>
                    <span className="text-gray-700">{amenity.name}</span>
                  </div>
                ))}
              </div>
              
              <h3 className="text-xl font-semibold text-skyliving-600 mb-4">Common Amenities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {commonAmenities.map((amenity, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-xl mr-3">{amenity.icon}</span>
                    <span className="text-gray-700">{amenity.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Column - Contact Card & CTA */}
          <div className="lg:col-span-1">
            <Card className="sticky top-28 shadow-md border-gray-100">
              <CardContent className="p-0">
                <div className="p-6 border-b border-gray-100">
                  <h3 className="text-xl font-bold text-skyliving-700 mb-2">Interested in this accommodation?</h3>
                  <p className="text-gray-600 mb-4">Contact us to schedule a visit or book your spot.</p>
                  <Button className="w-full bg-skyliving-600 hover:bg-skyliving-700 text-white" size="lg" asChild>
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </div>
                <div className="p-6">
                  <h4 className="font-medium text-gray-900 mb-3">Quick Contact</h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-2 text-skyliving-600" />
                      <span className="text-gray-700 text-sm">{accommodation.contact}</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-2 text-skyliving-600" />
                      <span className="text-gray-700 text-sm">{accommodation.email}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccommodationDetail;
