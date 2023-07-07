import { AUTHOR_DATA, Author } from './author.model';

export enum DeliveryType {
  FIRMADO = 'FIRMADO',
  ATRIBUIDO = 'ATRIBUIDO',
  DOCUMENTO = 'DOCUMENTO',
}

export const deliveryTypeOptions = Object.keys(DeliveryType).map((key) => ({
  value: key,
  label: DeliveryType[key as keyof typeof DeliveryType],
}));

export enum ConservationState {
  BUENO = 'BUENO',
  REGULAR = 'REGULAR',
  MALO = 'MALO',
}

export const conservationStateOptions = Object.keys(ConservationState).map(
  (key) => ({
    value: key,
    label: ConservationState[key as keyof typeof ConservationState],
  })
);

export enum IntegrityState {
  COMPLETO = 'COMPLETO',
  INCOMPLETO = 'INCOMPLETO',
  UNIDO = 'UNIDO',
}

export const integrityStateOptions = Object.keys(IntegrityState).map((key) => ({
  value: key,
  label: IntegrityState[key as keyof typeof IntegrityState],
}));

export interface Artwork {
  code: string;
  other_code?: string;
  name: string;
  centuryYear?: string;
  deliveryType: DeliveryType;
  signatureLocation?: string;
  country?: string;
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
  imageURL?: string;
  imageWordpressURL?: string;
  observation?: string;
  description?: string;
  location?: string;
  recordedBy?: string;
  reviewedBy?: string;
  registeredDate?: Date;
  author?: Author;
}
