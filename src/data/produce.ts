export interface Produce {
  id: number;
  name: string;
  type: 'fruit' | 'legume';
  seasons: ('spring' | 'summer' | 'autumn' | 'winter')[];
  regions: string[];
}

export const produceData: Produce[] = [
  {
    id: 1,
    name: 'Mangue',
    type: 'fruit',
    seasons: ['spring', 'summer'],
    regions: ['Diana', 'Sava', 'Boeny']
  },
  {
    id: 2,
    name: 'Litchi',
    type: 'fruit',
    seasons: ['summer'],
    regions: ['Atsinanana', 'Analanjirofo']
  },
  {
    id: 3,
    name: 'Manioc',
    type: 'legume',
    seasons: ['spring', 'summer', 'autumn', 'winter'],
    regions: ['Haute Matsiatra', 'Vakinankaratra']
  },
  // Ajoutez plus de données factices ici
];