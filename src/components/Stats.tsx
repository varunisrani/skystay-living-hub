
import React, { useState, useEffect } from 'react';

const Stats = () => {
  const [animateStats, setAnimateStats] = useState(false);
  
  useEffect(() => {
    // Start animation after component mounts
    setAnimateStats(true);
  }, []);
  
  const stats = [
    { value: 6, label: "NUMBER OF PG", symbol: "+" },
    { value: 900, label: "STUDENTS STRENGTH", symbol: "+" },
    { value: 6, label: "YEARS EXPERIENCE", symbol: "+" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h2 className="text-5xl md:text-6xl font-bold text-skyliving-700 mb-2 flex justify-center">
                <span className="counter inline-block">
                  {animateStats ? stat.value : 0}
                </span>
                <span>{stat.symbol}</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
