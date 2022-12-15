export interface ProductData {
  id: string;
  title: string;
  price: number;
  image: string;
  stock: number;
  ubication: string;
}

export interface IUbications {
  id: number;
  name: string;
}

export type IProductData = Omit<ProductData, 'id'>;
