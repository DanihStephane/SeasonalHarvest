import React from 'react';
import { regions } from '../data/regions';

interface MapProps {
  selectedRegion: string | null;
  onRegionClick: (regionId: string) => void;
}

export const MadagascarMap: React.FC<MapProps> = ({ selectedRegion, onRegionClick }) => {
  return (
    <div className="relative w-full">
      <svg
        viewBox="0 0 400 450"
        className="w-full h-auto"
        style={{ backgroundColor: '#f0f9ff' }}
      >
        {/* Fond de carte */}
        <path
          d="M 120,40 L 290,50 L 330,120 L 320,160 L 310,200 L 300,270 L 250,320 L 240,360 L 160,380 L 120,360 L 130,320 L 120,280 L 130,240 L 120,210 L 150,170 L 180,130 L 190,80 L 200,50"
          fill="#e5e7eb"
          stroke="#94a3b8"
          strokeWidth="2"
        />
        
        {/* Régions cliquables */}
        {regions.map((region) => (
          <g key={region.id}>
            <path
              d={region.coordinates}
              className={`
                ${selectedRegion === region.id
                  ? 'fill-green-500 stroke-green-700'
                  : 'fill-green-200 stroke-green-400 hover:fill-green-300'
                }
                cursor-pointer transition-colors duration-200
              `}
              strokeWidth="1"
              onClick={() => onRegionClick(region.id)}
            />
            <title>{region.name}</title>
          </g>
        ))}
      </svg>
      
      {/* Légende */}
      <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-2 text-sm text-center">
        {selectedRegion 
          ? regions.find(r => r.id === selectedRegion)?.name 
          : 'Cliquez sur une région'}
      </div>
    </div>
  );
};
