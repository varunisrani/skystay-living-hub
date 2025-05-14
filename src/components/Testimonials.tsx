
import React, { useState } from 'react';

const testimonialsData = [
  {
    id: 1,
    content: "The Sky Living exceeded all my expectations. Comfortable rooms, excellent food, and the library facilities are perfect for studying. The staff is incredibly attentive and the location is convenient for students.",
    author: "Divyesh Patel",
    designation: "Engineering Student",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    content: "Living at The Sky Living has been a game-changer for my academic life. The accommodations are spotless, the food is delicious and nutritious, and the staff treats us like family. Couldn't ask for a better place!",
    author: "Anuj Vyas",
    designation: "Medical Student",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg"
  },
  {
    id: 3,
    content: "I've stayed in several PGs before, but The Sky Living is in a different league. The amenities are top-notch, the rooms are spacious, and the environment is perfect for both studying and relaxation. Highly recommended!",
    author: "Harshad Mehta",
    designation: "Commerce Student",
    avatar: "https://randomuser.me/api/portraits/men/40.jpg"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-skyliving-700 font-heading">What People Say About Us</h2>
          <div className="w-24 h-1 bg-skyliving-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">Hear from our residents about their experience living with us.</p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-12 md:grid-cols-3">
            {testimonialsData.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="mb-6">
                  <svg className="h-8 w-8 text-skyliving-400 mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-gray-700 leading-relaxed mb-6">{testimonial.content}</p>
                </div>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <cite className="text-skyliving-700 font-bold block not-italic">{testimonial.author}</cite>
                    <span className="text-gray-500 text-sm">{testimonial.designation}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
