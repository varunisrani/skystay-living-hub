import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Accommodation } from '@/types/accommodation';
import { getAllAccommodations } from '@/services/accommodationService';
import { useToast } from '@/components/ui/use-toast';

const Hostels = () => {
  const [hostels, setHostels] = useState<Accommodation[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchHostels = async () => {
      try {
        setLoading(true);
        const data = await getAllAccommodations();
        setHostels(data);
      } catch (error) {
        console.error('Error fetching hostels:', error);
        toast({
          title: "Error",
          description: "Failed to load accommodations. Please try again later.",
          variant: "destructive"
        });
      } finally {
        setLoading(false);
      }
    };

    fetchHostels();
  }, [toast]);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-skyliving-700 font-heading">Our Premium Accommodations</h2>
          <div className="w-24 h-1 bg-skyliving-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">Discover our range of luxurious PG and hostel accommodations designed for your comfort and convenience.</p>
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-skyliving-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {hostels
              .slice() // create a shallow copy to avoid mutating state
              .sort((a, b) => {
                // Extract numeric part for correct sorting (e.g., TSL1, TSL2, TSL10)
                const getCodeNum = (code: string) => {
                  const match = code.match(/(\\d+)/);
                  return match ? parseInt(match[1], 10) : 0;
                };
                if (a.code && b.code) {
                  const prefixA = a.code.replace(/\\d+$/, '');
                  const prefixB = b.code.replace(/\\d+$/, '');
                  if (prefixA === prefixB) {
                    return getCodeNum(a.code) - getCodeNum(b.code);
                  }
                  return a.code.localeCompare(b.code);
                }
                return a.code ? -1 : 1;
              })
              .map((hostel) => (
                <Link 
                  to={`/accommodations/${hostel.id}`} 
                  key={hostel.id}
                  className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">
                    <div className="aspect-[16/9]">
                      <img 
                        src={hostel.main_image} 
                        alt={hostel.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-skyliving-700 group-hover:text-skyliving-600 transition-colors">{hostel.name}</h3>
                      <span className="text-sm font-semibold text-skyliving-500 bg-skyliving-50 px-3 py-1 rounded-full">{hostel.code}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{hostel.description.substring(0, 100)}...</p>
                    <div className="flex items-center justify-between">
                      <span className="text-skyliving-600 font-medium">View Details</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-skyliving-600 group-hover:translate-x-2 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Hostels;
