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
    regions: ['diana', 'sava', 'boeny', 'sofia']
  },
  {
    id: 2,
    name: 'Litchi',
    type: 'fruit',
    seasons: ['summer'],
    regions: ['atsinanana', 'analanjirofo', 'vatovavy']
  },
  {
    id: 3,
    name: 'Manioc',
    type: 'legume',
    seasons: ['spring', 'summer', 'autumn', 'winter'],
    regions: ['haute-matsiatra', 'vakinankaratra', 'itasy']
  },
  {
    id: 4,
    name: 'Vanille',
    type: 'fruit',
    seasons: ['winter', 'spring'],
    regions: ['sava', 'analanjirofo']
  },
  {
    id: 5,
    name: 'Ananas',
    type: 'fruit',
    seasons: ['summer', 'autumn'],
    regions: ['atsinanana', 'analanjirofo', 'vatovavy']
  },
  {
    id: 6,
    name: 'Patate Douce',
    type: 'legume',
    seasons: ['autumn', 'winter'],
    regions: ['vakinankaratra', 'haute-matsiatra', 'ihorombe']
  },
  {
    id: 7,
    name: 'Banane',
    type: 'fruit',
    seasons: ['spring', 'summer', 'autumn', 'winter'],
    regions: ['diana', 'sava', 'analanjirofo', 'atsinanana']
  },
  {
    id: 8,
    name: 'Tomate',
    type: 'legume',
    seasons: ['spring', 'summer'],
    regions: ['analamanga', 'vakinankaratra', 'itasy']
  },
  {
    id: 9,
    name: 'Avocat',
    type: 'fruit',
    seasons: ['winter', 'spring'],
    regions: ['atsinanana', 'analanjirofo', 'vatovavy']
  },
  {
    id: 10,
    name: 'Carotte',
    type: 'legume',
    seasons: ['autumn', 'winter'],
    regions: ['vakinankaratra', 'haute-matsiatra', 'analamanga']
  }
];
