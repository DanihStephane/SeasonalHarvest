import React from 'react';
import { Produce } from '../data/produce';

interface CalendarProps {
  selectedProduce: Produce[];
  selectedSeason: string | null;
}

const months = [
  'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
  'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
];

const seasonMap = {
  'winter': [11, 0, 1],
  'spring': [2, 3, 4],
  'summer': [5, 6, 7],
  'autumn': [8, 9, 10],
};

export const Calendar: React.FC<CalendarProps> = ({ selectedProduce, selectedSeason }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="grid grid-cols-4 gap-4">
        {months.map((month, index) => (
          <div
            key={month}
            className={`p-4 rounded-lg ${
              selectedSeason && seasonMap[selectedSeason as keyof typeof seasonMap].includes(index)
                ? 'bg-green-100'
                : 'bg-gray-50'
            }`}
          >
            <h3 className="font-bold mb-2">{month}</h3>
            <div className="space-y-1">
              {selectedProduce.map(produce => (
                <div
                  key={produce.id}
                  className="text-sm px-2 py-1 rounded bg-white shadow-sm"
                >
                  {produce.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};