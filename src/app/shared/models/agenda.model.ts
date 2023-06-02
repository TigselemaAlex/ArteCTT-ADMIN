export interface Agenda {
  id?: number;
  date: Date;
  activity: string;
  description: string;
}

export const AGENDA_DATA: Agenda[] = [
  {
    id: 1,
    activity: 'Actividad 1',
    date: new Date(),
    description: 'Descripcion actividad 1',
  },
  {
    id: 2,
    activity: 'Actividad 2',
    date: new Date(),
    description: 'Descripcion actividad 2',
  },
  {
    id: 3,
    activity: 'Actividad 3',
    date: new Date(),
    description: 'Descripcion actividad 3',
  },
  {
    id: 4,
    activity: 'Actividad 4',
    date: new Date(),
    description: 'Descripcion actividad 4',
  },
  {
    id: 5,
    activity: 'Actividad 5',
    date: new Date(),
    description: 'Descripcion actividad 5',
  },
  {
    id: 6,
    activity: 'Actividad 6',
    date: new Date(),
    description: 'Descripcion actividad 6',
  },
  {
    id: 7,
    activity: 'Actividad 7',
    date: new Date(),
    description: 'Descripcion actividad 7',
  },
  {
    id: 8,
    activity: 'Actividad 8',
    date: new Date(),
    description: 'Descripcion actividad 8',
  },
  {
    id: 9,
    activity: 'Actividad 9',
    date: new Date(),
    description: 'Descripcion actividad 9',
  },
  {
    id: 10,
    activity: 'Actividad 10',
    date: new Date(),
    description: 'Descripcion actividad 10',
  },
];
