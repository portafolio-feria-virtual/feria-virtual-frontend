export interface IUser {
  tipo_usuario?: string | undefined;
  first_name?: string | undefined;
  last_name?: string | undefined;
  username?: string | undefined;
  email?: string | undefined;
  address?: string | undefined;
  phone?: string | undefined;
  country?: string | undefined;
  rut?: string | undefined;
  doc_num?: string | undefined;
  business_name?: string | undefined;
  prod_type?: string | undefined;
  capacity?: string | undefined;
  size?: string | undefined;
  cooling?: boolean | undefined;
  password?: string | undefined;
}

export interface IRegister extends IUser {
  confirmPassword?: string | undefined;
  terms?: boolean | undefined;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IAuthState {
  user: IUser | null;
  error: string | null;
}

export enum UserTypes {
  'CLIENTE_EXTERNO' = '0',
  'CLIENTE_INTERNO' = '1',
  'PRODUCTOR' = '2',
  'TRANSPORTISTA' = '3'
}
