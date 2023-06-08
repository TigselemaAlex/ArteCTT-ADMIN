import { Author } from "./author.model";

export interface Artwork {
  id: number;
  otherid:number; 
  author?: Author;
  name?: string;
  picture: string;
  date: string; //silgo/anio
  signature:string;
  ubication:string;
  technique:string;
  support:string;
  stateC:string;
  stateI:string;
  country: string;
  observation?: string;
  dimensions: {
    width: number;
    height: number;
    prof:number;
    dm:number;
    dme:number;
    pa:number;
    pan:number;
    pnum:number;
    ma:number;
    man:number;
    mprof:number;
  };
  formaIngreso:string;
  ValorUSD:number;
  avaluo:number;
  fechaIngreso:Date;
  fechaRegistro:Date;
}

export const ARTWORK_DATA: Artwork[] = [
  {
    id: 1,
    otherid:2342,
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
    signature:'',
    ubication:'',
    technique:'', 
    support:'',
    stateC:'',
    stateI:'',  
    observation:
      'El cuadro tine la firma del autor en la esquina inferior derecha',
    picture: '',
    dimensions: {
      width: 73,
      height: 120,
      prof:10,
      dm:10,
      dme:10,
      pa:10,
      pan:10,
      pnum:10,
      ma:10,
      man:10,
      mprof:10, 
    },
    formaIngreso:'',
    ValorUSD:100,
    avaluo:100,
    fechaIngreso:new Date(2023, 5, 6),
    fechaRegistro: new Date(2023, 5, 7)
  },
  {
    id: 2,
    otherid:56567567,
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
    signature:'Firmado',
    ubication:'Inferior',
    technique:'Ninguna', 
    support:'Ninguno',
    stateC:'Bueno',
    stateI:'Completo',
    observation:
      'El cuadro tine la firma del autor en la esquina inferior derecha',
    picture: 'https://blogdeartecontemporaneo.files.wordpress.com/2013/12/3-dsc07279.jpg',
    dimensions: {
      width: 73,
      height: 120,
      prof:10,
      dm:10,
      dme:10,
      pa:10,
      pan:10,
      pnum:10,
      ma:10,
      man:10,
      mprof:10,
    },
    formaIngreso:'Normal',
    ValorUSD:100,
    avaluo:100,
    fechaIngreso:new Date(2023, 5, 6),
    fechaRegistro:new Date(2023, 5, 6),
  },
  {
    id: 3,
    otherid:56567567,
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
    signature:'',
    ubication:'',
    technique:'', 
    support:'',
    stateC:'',
    stateI:'',
    observation:
      'El cuadro tine la firma del autor en la esquina inferior derecha',
    picture: '',
    dimensions: {
      width: 73,
      height: 120,
      prof:10,
      dm:10,
      dme:10,
      pa:10,
      pan:10,
      pnum:10,
      ma:10,
      man:10,
      mprof:10,
    },
    formaIngreso:'',
    ValorUSD:100,
    avaluo:100,
    fechaIngreso:new Date(2023, 5, 6),
    fechaRegistro:new Date(2023, 5, 6),
  },
  {
    id: 4,
    otherid:56567567,
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
    signature:'',
    ubication:'',
    technique:'', 
    support:'',
    stateC:'',
    stateI:'',
    observation:
      'El cuadro tine la firma del autor en la esquina inferior derecha',
    picture: '',
    dimensions: {
      width: 73,
      height: 120,
      prof:10,
      dm:10,
      dme:10,
      pa:10,
      pan:10,
      pnum:10,
      ma:10,
      man:10,
      mprof:10,
    },
    formaIngreso:'',
    ValorUSD:100,
    avaluo:100,
    fechaIngreso:new Date(2023, 5, 6),
    fechaRegistro:new Date(2023, 5, 6),
  },
  {
    id: 5,
    otherid:56564467,
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
    signature:'',
    ubication:'',
    technique:'', 
    support:'',
    stateC:'',
    stateI:'',
    observation:
      'El cuadro tine la firma del autor en la esquina inferior derecha',
    picture: '',
    dimensions: {
      width: 73,
      height: 120,
      prof:10,
      dm:10,
      dme:10,
      pa:10,
      pan:10,
      pnum:10,
      ma:10,
      man:10,
      mprof:10,
    },
    formaIngreso:'',
    ValorUSD:100,
    avaluo:100,
    fechaIngreso:new Date(2023, 5, 6),
    fechaRegistro:new Date(2023, 5, 6),
  },
  {
    id: 6,
    otherid:56114467,
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
    signature:'',
    ubication:'',
    technique:'', 
    support:'',
    stateC:'',
    stateI:'',
    observation:
      'El cuadro tine la firma del autor en la esquina inferior derecha',
    picture: '',
    dimensions: {
      width: 73,
      height: 120,
      prof:10,
      dm:10,
      dme:10,
      pa:10,
      pan:10,
      pnum:10,
      ma:10,
      man:10,
      mprof:10,
    },
    formaIngreso:'',
    ValorUSD:100,
    avaluo:100,
    fechaIngreso:new Date(2023, 5, 6),
    fechaRegistro:new Date(2023, 5, 6),
  },
  {
    id: 7,
    otherid:56114477,
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
    signature:'',
    ubication:'',
    technique:'', 
    support:'',
    stateC:'',
    stateI:'',
    observation:
      'El cuadro tine la firma del autor en la esquina inferior derecha',
    picture: '',
    dimensions: {
      width: 73,
      height: 120,
      prof:10,
      dm:10,
      dme:10,
      pa:10,
      pan:10,
      pnum:10,
      ma:10,
      man:10,
      mprof:10,
    },
    formaIngreso:'',
    ValorUSD:100,
    avaluo:100,
    fechaIngreso:new Date(2023, 5, 6),
    fechaRegistro:new Date(2023, 5, 6),
  },
  {
    id: 8,
    otherid:56114477,
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
    signature:'',
    ubication:'',
    technique:'', 
    support:'',
    stateC:'',
    stateI:'',
    observation:
      'El cuadro tine la firma del autor en la esquina inferior derecha',
    picture: '',
    dimensions: {
      width: 73,
      height: 120,
      prof:10,
      dm:10,
      dme:10,
      pa:10,
      pan:10,
      pnum:10,
      ma:10,
      man:10,
      mprof:10,
    },
    formaIngreso:'',
    ValorUSD:100,
    avaluo:100,
    fechaIngreso:new Date(2023, 5, 6),
    fechaRegistro:new Date(2023, 5, 6),
  },
];
