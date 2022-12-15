export interface IUser {
  type?: string;
  firstName?: string;
  lastName?: string;
  username?: string;
  email?: string;
  address?: string;
  phone?: string;
  country?: string;
  rut?: string;
  documentNumber?: string;
  businessName?: string;
  productType?: string;
  capacity?: string;
  size?: string;
  cooling?: boolean;
  password?: string;
  isActive?: boolean;
}

export enum UserType {
  'CLIENTE_EXTRANJERO' = 'Extranjero',
  'CLIENTE_LOCAL' = 'Local',
  'PRODUCTOR' = 'Productor',
  'TRANSPORTISTA' = 'Transportista',
  'ADMIN' = 'Administrador',
  'CONSULTOR' = 'Consultor'
}
