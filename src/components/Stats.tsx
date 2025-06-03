import React, { useState, useEffect, useRef } from 'react';

const Stats = () => {
  const [animateStats, setAnimateStats] = useState(false);
  const [counts, setCounts] = useState({ pg: 0, students: 0, years: 0 });
  const statsRef = useRef(null);
  
  const stats = [
    { id: "pg", endValue: 12, label: "NUMBER OF PG", symbol: "+", color: "bg-gradient-to-r from-skyliving-600 to-skyliving-500" },
    { id: "students", endValue: 2500, label: "STUDENTS STRENGTH", symbol: "+", color: "bg-gradient-to-r from-skyliving-500 to-skyliving-400" },
    { id: "years", endValue: 9, label: "YEARS EXPERIENCE", symbol: "+", color: "bg-gradient-to-r from-skyliving-400 to-skyliving-300" },
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateStats(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    
    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);
  
  useEffect(() => {
    if (animateStats) {
      stats.forEach(stat => {
        const startValue = 0;
        const duration = 1500;
        const startTime = Date.now();
        
        const updateCounter = () => {
          const currentTime = Date.now();
          const progress = Math.min((currentTime - startTime) / duration, 1);
          const value = Math.floor(progress * stat.endValue);
          
          setCounts(prev => ({ ...prev, [stat.id]: value }));
          
          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          }
        };
        
        updateCounter();
      });
    }
  }, [animateStats]);

  return (
    <section ref={statsRef} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat) => (
            <div key={stat.id} className="transform hover:scale-105 transition-all duration-300">
              <div className="bg-white rounded-2xl shadow-xl p-8 h-full flex flex-col items-center justify-center border border-gray-100">
                <div className={`w-24 h-24 mb-6 rounded-full flex items-center justify-center ${stat.color} text-white`}>
                  <span className="text-3xl font-bold">{counts[stat.id]}</span>
                  <span className="text-lg">{stat.symbol}</span>
                </div>
                <p className="text-lg font-medium text-gray-600 tracking-wider text-center">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
