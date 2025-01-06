import React, { useState } from 'react';
import { Calendar } from './components/Calendar';
import { MadagascarMap } from './components/MadagascarMap';
import { Filters } from './components/Filters';
import { produceData } from './data/produce';
import { Sprout } from 'lucide-react';

function App() {
  const [selectedSeason, setSelectedSeason] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const filteredProduce = produceData.filter(item => {
    if (selectedSeason && !item.seasons.includes(selectedSeason as any)) return false;
    if (selectedType && item.type !== selectedType) return false;
    if (selectedRegion && !item.regions.includes(selectedRegion)) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-green-600 text-white p-6">
        <div className="container mx-auto flex items-center gap-2">
          <Sprout size={32} />
          <h1 className="text-2xl font-bold">Calendrier des Fruits et Légumes de Saison</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Filters
          selectedSeason={selectedSeason}
          selectedType={selectedType}
          onSeasonChange={setSelectedSeason}
          onTypeChange={setSelectedType}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Calendar
              selectedProduce={filteredProduce}
              selectedSeason={selectedSeason}
            />
          </div>
          <div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4">Régions de Madagascar</h2>
              <MadagascarMap
                selectedRegion={selectedRegion}
                onRegionClick={setSelectedRegion}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;