import { Author } from './author.model';

export enum DeliveryType {
  firmado = 'FIRMADO',
  atribuido = 'ATRIBUIDO',
  documento = 'DOCUMENTO',
}
export enum ConservationState {
  bueno = 'BUENO',
  regular = 'REGULAR',
  malo = 'MALO',
}
export enum IntegrityState {
  completo = 'COMPLETO',
  incompleto = 'INCOMPLETO',
  unido = 'UNIDO',
}

export interface Artwork {
  code: string;
  other_code?: string;
  name: string;
  centuryYear: string;
  deliveryType: DeliveryType;
  signatureLocation: string;
  country: string;
  technique: string;
  support: string;
  conservationState: ConservationState;
  integrityState: IntegrityState;
  incomeForm?: string;
  incomePrice?: number;
  incomeYear?: number;
  value?: number;
  pieceHeight?: number;
  pieceWidth?: number;
  pieceDeep?: number;
  gravingHeight?: number;
  gravingWidth?: number;
  frameElementHeight?: number;
  frameElementWidth?: number;
  imageURL: string;
  observation?: string;
  location: string;
  recordedBy: string;
  reviewedBy: string;
  registeredDate?: Date;
  author?: Author;
}

export const ARTWORK_DATA: Artwork[] = [
  {
    code: 'COD1',
    other_code: 'COD12',
    name: 'pintura 1',
    centuryYear: 'SIGO XX',
    deliveryType: DeliveryType.atribuido,
    signatureLocation: 'Borde inferior derecho',
    country: 'Ecuador',
    technique: 'Acuarela',
    support: 'Cartulina',
    conservationState: ConservationState.bueno,
    integrityState: IntegrityState.completo,
    incomeForm: 'Compra',
    incomePrice: 200,
    incomeYear: 2009,
    value: 350,
    imageURL:
      'https://culturatungurahua.com/wp-content/uploads/2022/12/cuadro-24.gif',
    observation: 'observaciones',
    location: 'Museo casa de la cultura',
    recordedBy: 'Martha Molina',
    reviewedBy: 'Juan Luis Siguenza',
  },
  {
    code: 'COD1',
    other_code: 'COD12',
    name: 'pintura 1',
    centuryYear: 'SIGO XX',
    deliveryType: DeliveryType.atribuido,
    signatureLocation: 'Borde inferior derecho',
    country: 'Ecuador',
    technique: 'Acuarela',
    support: 'Cartulina',
    conservationState: ConservationState.bueno,
    integrityState: IntegrityState.completo,
    incomeForm: 'Compra',
    incomePrice: 200,
    incomeYear: 2009,
    value: 350,
    imageURL:
      'https://culturatungurahua.com/wp-content/uploads/2022/12/cuadro-24.gif',
    observation: 'observaciones',
    location: 'Museo casa de la cultura',
    recordedBy: 'Martha Molina',
    reviewedBy: 'Juan Luis Siguenza',
  },
  {
    code: 'COD1',
    other_code: 'COD12',
    name: 'pintura 1',
    centuryYear: 'SIGO XX',
    deliveryType: DeliveryType.atribuido,
    signatureLocation: 'Borde inferior derecho',
    country: 'Ecuador',
    technique: 'Acuarela',
    support: 'Cartulina',
    conservationState: ConservationState.bueno,
    integrityState: IntegrityState.completo,
    incomeForm: 'Compra',
    incomePrice: 200,
    incomeYear: 2009,
    value: 350,
    imageURL:
      'https://culturatungurahua.com/wp-content/uploads/2022/12/cuadro-24.gif',
    observation: 'observaciones',
    location: 'Museo casa de la cultura',
    recordedBy: 'Martha Molina',
    reviewedBy: 'Juan Luis Siguenza',
  },
  {
    code: 'COD1',
    other_code: 'COD12',
    name: 'pintura 1',
    centuryYear: 'SIGO XX',
    deliveryType: DeliveryType.atribuido,
    signatureLocation: 'Borde inferior derecho',
    country: 'Ecuador',
    technique: 'Acuarela',
    support: 'Cartulina',
    conservationState: ConservationState.bueno,
    integrityState: IntegrityState.completo,
    incomeForm: 'Compra',
    incomePrice: 200,
    incomeYear: 2009,
    value: 350,
    imageURL:
      'https://culturatungurahua.com/wp-content/uploads/2022/12/cuadro-24.gif',
    observation: 'observaciones',
    location: 'Museo casa de la cultura',
    recordedBy: 'Martha Molina',
    reviewedBy: 'Juan Luis Siguenza',
  },
  {
    code: 'COD1',
    other_code: 'COD12',
    name: 'pintura 1',
    centuryYear: 'SIGO XX',
    deliveryType: DeliveryType.atribuido,
    signatureLocation: 'Borde inferior derecho',
    country: 'Ecuador',
    technique: 'Acuarela',
    support: 'Cartulina',
    conservationState: ConservationState.bueno,
    integrityState: IntegrityState.completo,
    incomeForm: 'Compra',
    incomePrice: 200,
    incomeYear: 2009,
    value: 350,
    imageURL:
      'https://culturatungurahua.com/wp-content/uploads/2022/12/cuadro-24.gif',
    observation: 'observaciones',
    location: 'Museo casa de la cultura',
    recordedBy: 'Martha Molina',
    reviewedBy: 'Juan Luis Siguenza',
  },
  {
    code: 'COD1',
    other_code: 'COD12',
    name: 'pintura 1',
    centuryYear: 'SIGO XX',
    deliveryType: DeliveryType.atribuido,
    signatureLocation: 'Borde inferior derecho',
    country: 'Ecuador',
    technique: 'Acuarela',
    support: 'Cartulina',
    conservationState: ConservationState.bueno,
    integrityState: IntegrityState.completo,
    incomeForm: 'Compra',
    incomePrice: 200,
    incomeYear: 2009,
    value: 350,
    imageURL:
      'https://culturatungurahua.com/wp-content/uploads/2022/12/cuadro-24.gif',
    observation: 'observaciones',
    location: 'Museo casa de la cultura',
    recordedBy: 'Martha Molina',
    reviewedBy: 'Juan Luis Siguenza',
  },
];
