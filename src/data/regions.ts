export interface Region {
  id: string;
  name: string;
  coordinates: string; // Coordonnées SVG pour le path
}

export const regions: Region[] = [
  {
    id: 'diana',
    name: 'Diana',
    coordinates: 'M 150,100 L 200,100 L 200,150 L 150,150 Z'
  },
  {
    id: 'sava',
    name: 'Sava',
    coordinates: 'M 200,100 L 250,100 L 250,150 L 200,150 Z'
  },
  // Ajoutez plus de régions avec leurs coordonnées SVG
];