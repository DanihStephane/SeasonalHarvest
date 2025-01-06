import React from 'react';
import { Filter } from 'lucide-react';

interface FiltersProps {
  onSeasonChange: (season: string | null) => void;
  onTypeChange: (type: string | null) => void;
  selectedSeason: string | null;
  selectedType: string | null;
}

export const Filters: React.FC<FiltersProps> = ({
  onSeasonChange,
  onTypeChange,
  selectedSeason,
  selectedType,
}) => {
  return (
    <div className="flex gap-4 items-center mb-6 bg-white p-4 rounded-lg shadow">
      <Filter className="text-gray-500" />
      <div className="space-x-2">
        <select
          className="px-3 py-2 border rounded-md"
          value={selectedSeason || ''}
          onChange={(e) => onSeasonChange(e.target.value || null)}
        >
          <option value="">Toutes les saisons</option>
          <option value="spring">Printemps</option>
          <option value="summer">Été</option>
          <option value="autumn">Automne</option>
          <option value="winter">Hiver</option>
        </select>
        <select
          className="px-3 py-2 border rounded-md"
          value={selectedType || ''}
          onChange={(e) => onTypeChange(e.target.value || null)}
        >
          <option value="">Tous les types</option>
          <option value="fruit">Fruits</option>
          <option value="legume">Légumes</option>
        </select>
      </div>
    </div>
  );
};