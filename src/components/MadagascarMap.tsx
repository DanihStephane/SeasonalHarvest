import React from 'react';
import { regions } from '../data/regions';

interface MapProps {
  selectedRegion: string | null;
  onRegionClick: (regionId: string) => void;
}

export const MadagascarMap: React.FC<MapProps> = ({ selectedRegion, onRegionClick }) => {
  return (
    <div className="w-full max-w-md">
      <svg
        viewBox="0 0 400 600"
        className="w-full h-auto"
      >
        {regions.map((region) => (
          <path
            key={region.id}
            d={region.coordinates}
            className={`${
              selectedRegion === region.id
                ? 'fill-green-500'
                : 'fill-green-200'
            } hover:fill-green-300 cursor-pointer transition-colors`}
            onClick={() => onRegionClick(region.id)}
          />
        ))}
      </svg>
    </div>
  );
};