import { Artwork } from './artwork.model';

export interface Author {
  id?: number;
  fullName: string;
  address: string;
  bibliography: string;
  artworks?: Artwork[];
}
