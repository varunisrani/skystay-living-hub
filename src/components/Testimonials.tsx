
import React, { useState } from 'react';

const testimonialsData = [
  {
    id: 1,
    content: "Comfortable and clean room. Good food, good common area, excellent library facilities. Very friendly staff. PG is not very far from major educational institutes.",
    author: "Divyesh Patel",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    content: "The staff were so kind, accommodating, professional, and helpful. The communication was excellent. The in-house cafeteria and the food quality are super good.",
    author: "Anuj Vyas",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg"
  },
  {
    id: 3,
    content: "The staff were lovely and helpful. The location was great too. Beds were nice and comfy and the rooms were clean. The library is peaceful and relaxing.",
    author: "Harshad Mehta",
    avatar: "https://randomuser.me/api/portraits/men/40.jpg"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">WHAT PEOPLE SAY ABOUT US</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8 md:grid-cols-3">
            {testimonialsData.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className="bg-gray-50 p-8 rounded-lg shadow-md border border-gray-100"
              >
                <blockquote className="mb-6 italic text-gray-700">"{testimonial.content}"</blockquote>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <cite className="text-skyliving-700 font-medium not-italic">{testimonial.author}</cite>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeIndex === index ? "bg-skyliving-700" : "bg-skyliving-300"
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
