export interface ExternalSale {
  id: string;
  name: string;
  description: string;
  fileName: string | boolean;
  amount: number;
}

export type IExternalSale = Omit<ExternalSale, 'id'>;
