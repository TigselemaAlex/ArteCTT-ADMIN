<<<<<<< HEAD
import { Author } from "./author.model";

export interface Artwork {
  id: number;
  author?: Author;
=======
export interface Artwork {
  id: number;
  author?: string;
>>>>>>> 37d22e1487fa0b28a989708add4d51fcdc2ad4a6
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
<<<<<<< HEAD
    author: {
    id:1,
    nombre:'Vanessa',
    apellido:'Llerena',
    pais:'Ecuador',
    provincia:'Tungurahua',
    ciudad:'Ambato',
    biografia:'Ninguna'
    },
=======
    author: 'autor 1',
>>>>>>> 37d22e1487fa0b28a989708add4d51fcdc2ad4a6
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
<<<<<<< HEAD
    author: {
    id:2,
    nombre:'Juan',
    apellido:'Llerena',
    pais:'Ecuador',
    provincia:'Tungurahua',
    ciudad:'Pichincha',
    biografia:'Ninguna'
    },
=======
    author: 'autor 2',
>>>>>>> 37d22e1487fa0b28a989708add4d51fcdc2ad4a6
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
<<<<<<< HEAD
    author: {
    id:3,
    nombre:'Pablo',
    apellido:'Perez',
    pais:'Ecuador',
    provincia:'Tungurahua',
    ciudad:'Banos',
    biografia:'Ninguna'
    },
=======
    author: 'autor 3',
>>>>>>> 37d22e1487fa0b28a989708add4d51fcdc2ad4a6
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
<<<<<<< HEAD
    author: {
    id:4,
    nombre:'Daniela',
    apellido:'Sanchez',
    pais:'Ecuador',
    provincia:'Guayas',
    ciudad:'Guayaquil',
    biografia:'Ninguna'
    },
=======
    author: 'autor 4',
>>>>>>> 37d22e1487fa0b28a989708add4d51fcdc2ad4a6
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
<<<<<<< HEAD
    author: {
      id:5,
      nombre:'Juan',
      apellido:'Perez',
      pais:'Ecuador',
      provincia:'Guayas',
      ciudad:'Guayaquil',
      biografia:'Ninguna'

    },
=======
    author: 'autor 5',
>>>>>>> 37d22e1487fa0b28a989708add4d51fcdc2ad4a6
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
<<<<<<< HEAD
    author: {
      id:6,
      nombre:'Juan',
      apellido:'Montana',
      pais:'Ecuador',
      provincia:'Guayas',
      ciudad:'Guayaquil',
      biografia:'Ninguna'
    },
=======
    author: 'autor 6',
>>>>>>> 37d22e1487fa0b28a989708add4d51fcdc2ad4a6
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
<<<<<<< HEAD
    author: {
      id:7,
      nombre:'Paula',
      apellido:'Villafuerte',
      pais:'Ecuador',
      provincia:'Guayas',
      ciudad:'Guayaquil',
      biografia:'Ninguna'
    },
=======
    author: 'autor 7',
>>>>>>> 37d22e1487fa0b28a989708add4d51fcdc2ad4a6
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
<<<<<<< HEAD
    author:{
      id:8,
      nombre:'Paola',
      apellido:'Monar',
      pais:'Ecuador',
      provincia:'Azuay',
      ciudad:'Cuenca',
      biografia:'Ninguna'

    },
=======
    author: 'autor 8',
>>>>>>> 37d22e1487fa0b28a989708add4d51fcdc2ad4a6
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
