export interface Artwork {
  id: number;
  author?: string;
  name?: string;
  picture: string;
  date: string;
  country: string;
  observation?: string;
  dimensions: {
    width: number;
    height: number;
  };
}

export const ARTWORK_DATA: Artwork[] = [
  {
    id: 1,
    author: 'autor 1',
    country: 'Ecuador',
    date: 'Sigo XXI/2021',
    name: 'Atardecer',
    observation:
      'El cuadro tine la firma del autor en la esquina inferior derecha',
    picture: '',
    dimensions: {
      width: 73,
      height: 120,
    },
  },
  {
    id: 2,
    author: 'autor 2',
    country: 'Ecuador',
    date: 'Sigo XXI/2021',
    name: 'asdas',
    observation:
      'El cuadro tine la firma del autor en la esquina inferior derecha',
    picture: '',
    dimensions: {
      width: 73,
      height: 120,
    },
  },
  {
    id: 3,
    author: 'autor 3',
    country: 'Ecuador',
    date: 'Sigo XXI/2021',
    name: 'Pintura 2',
    observation:
      'El cuadro tine la firma del autor en la esquina inferior derecha',
    picture: '',
    dimensions: {
      width: 73,
      height: 120,
    },
  },
  {
    id: 4,
    author: 'autor 4',
    country: 'Ecuador',
    date: 'Sigo XXI/2021',
    name: 'Atardecer 4',
    observation:
      'El cuadro tine la firma del autor en la esquina inferior derecha',
    picture: '',
    dimensions: {
      width: 73,
      height: 120,
    },
  },
  {
    id: 5,
    author: 'autor 5',
    country: 'Ecuador',
    date: 'Sigo XXI/2021',
    name: 'pintura 3',
    observation:
      'El cuadro tine la firma del autor en la esquina inferior derecha',
    picture: '',
    dimensions: {
      width: 73,
      height: 120,
    },
  },
  {
    id: 6,
    author: 'autor 6',
    country: 'Ecuador',
    date: 'Sigo XXI/2021',
    name: 'pintura 4',
    observation:
      'El cuadro tine la firma del autor en la esquina inferior derecha',
    picture: '',
    dimensions: {
      width: 73,
      height: 120,
    },
  },
  {
    id: 7,
    author: 'autor 7',
    country: 'Ecuador',
    date: 'Sigo XXI/2021',
    name: 'pintura 4',
    observation:
      'El cuadro tine la firma del autor en la esquina inferior derecha',
    picture: '',
    dimensions: {
      width: 73,
      height: 120,
    },
  },
  {
    id: 8,
    author: 'autor 8',
    country: 'Ecuador',
    date: 'Sigo XXI/2021',
    name: 'pintura 4',
    observation:
      'El cuadro tine la firma del autor en la esquina inferior derecha',
    picture: '',
    dimensions: {
      width: 73,
      height: 120,
    },
  },
];
