import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';

interface PgTypeSelectionProps {
  type: 'boys' | 'girls';
  triggerElement: React.ReactNode;
}

const PgTypeSelection = ({ type, triggerElement }: PgTypeSelectionProps) => {
  const navigate = useNavigate();
  
  const handleSelection = (path: string) => {
    navigate(path);
  };
  
  const title = type === 'boys' ? 'Boys PG/Hostels' : 'Girls PG/Hostels';
  const availableOptions = [
    {
      id: 1,
      name: type === 'boys' ? 'The Sky Living Boys PG' : 'The Sky Living Girls PG',
      location: 'Central Location',
      path: type === 'boys' ? '/boys-accommodations' : '/girls-accommodations',
    },
    {
      id: 2,
      name: type === 'boys' ? 'Premium Boys Hostel' : 'Premium Girls Hostel',
      location: 'Near IT Park',
      path: type === 'boys' ? '/boys-accommodations' : '/girls-accommodations',
    },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        {triggerElement}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-heading text-skyliving-700">
            {title}
          </DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <p className="text-center text-sm text-gray-600 mb-4">
            Please select a PG/Hostel to view details
          </p>
          <div className="space-y-3">
            {availableOptions.map((option) => (
              <div 
                key={option.id}
                onClick={() => handleSelection(option.path)}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md cursor-pointer transition-all"
              >
                <h3 className="font-medium text-skyliving-600">{option.name}</h3>
                <p className="text-sm text-gray-500">{option.location}</p>
              </div>
            ))}
            <div className="text-center mt-4">
              <Button 
                variant="outline"
                onClick={() => handleSelection('/accommodations')}
                className="w-full"
              >
                View All PG/Hostels
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PgTypeSelection;