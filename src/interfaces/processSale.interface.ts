export type ProcessStatus = 'Publicada' | 'Cerrada' | 'Adjudicada' | 'Cancelada' | 'Rechazada';

export interface IProductSale {
  id: string;
  name: string;
  amount: number;
}

export interface IProcessSale {
  id: string;
  name: string;
  description: string;
  country: string;
  region: string;
  city: string;
  street: string;
  postalCode: string;
  productList: IProductSale[];
  maxAmount: number;
  processStatus: ProcessStatus;
  initDate: string;
  endDate: string;
}
