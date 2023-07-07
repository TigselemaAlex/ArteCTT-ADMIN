import { Artwork } from './artwork.model';

export interface Author {
  id?: number;
  fullName: string;
  address?: string;
  bibliography?: string;
  artworks?: Artwork[];
}

export const AUTHOR_DATA: Author[] = [
  {
    id: 1,
    fullName: 'Fausto Holguín Vásconez',
    address: '',
    bibliography: 'Nacio en 1920 en Ambato Tungurahua',
  },

  {
    id: 1,
    fullName: 'Alex Tigselema',
    address: '',
    bibliography: 'Nacio en 1920 en Ambato Tungurahua',
  },
];
