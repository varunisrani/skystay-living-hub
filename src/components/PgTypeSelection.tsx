import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

interface PgTypeSelectionProps {
  type: 'boys' | 'girls';
  triggerElement?: React.ReactNode;
}

const PgTypeSelection = ({ type, triggerElement }: PgTypeSelectionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  
  const handleSelection = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
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
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 font-medium transition-colors text-gray-700 hover:text-skyliving-600"
      >
        {type === 'boys' ? 'Boys PG' : 'Girls PG'}
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
          {availableOptions.map((option) => (
            <div 
              key={option.id}
              onClick={() => handleSelection(option.path)}
              className="px-4 py-3 hover:bg-gray-50 cursor-pointer"
            >
              <h3 className="font-medium text-skyliving-600">{option.name}</h3>
              <p className="text-sm text-gray-500">{option.location}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PgTypeSelection;