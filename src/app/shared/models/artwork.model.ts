import { Author } from "./author.model";

export interface Artwork {
  id: number;
  author?: Author;
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
    author: {
    id:1,
    nombre:'Vanessa',
    apellido:'Llerena',
    pais:'Ecuador',
    provincia:'Tungurahua',
    ciudad:'Ambato',
    biografia:'Ninguna'
    },
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
    author: {
    id:2,
    nombre:'Juan',
    apellido:'Llerena',
    pais:'Ecuador',
    provincia:'Tungurahua',
    ciudad:'Pichincha',
    biografia:'Ninguna'
    },
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
    author: {
    id:3,
    nombre:'Pablo',
    apellido:'Perez',
    pais:'Ecuador',
    provincia:'Tungurahua',
    ciudad:'Banos',
    biografia:'Ninguna'
    },
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
    author: {
    id:4,
    nombre:'Daniela',
    apellido:'Sanchez',
    pais:'Ecuador',
    provincia:'Guayas',
    ciudad:'Guayaquil',
    biografia:'Ninguna'
    },
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
    author: {
      id:5,
      nombre:'Juan',
      apellido:'Perez',
      pais:'Ecuador',
      provincia:'Guayas',
      ciudad:'Guayaquil',
      biografia:'Ninguna'

    },
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
    author: {
      id:6,
      nombre:'Juan',
      apellido:'Montana',
      pais:'Ecuador',
      provincia:'Guayas',
      ciudad:'Guayaquil',
      biografia:'Ninguna'
    },
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
    author: {
      id:7,
      nombre:'Paula',
      apellido:'Villafuerte',
      pais:'Ecuador',
      provincia:'Guayas',
      ciudad:'Guayaquil',
      biografia:'Ninguna'
    },
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
    author:{
      id:8,
      nombre:'Paola',
      apellido:'Monar',
      pais:'Ecuador',
      provincia:'Azuay',
      ciudad:'Cuenca',
      biografia:'Ninguna'

    },
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
