import { IUser } from './user.interface';

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
  'CLIENTE_EXTRANJERO' = 'Extranjero',
  'CLIENTE_LOCAL' = 'Local',
  'PRODUCTOR' = 'Productor',
  'TRANSPORTISTA' = 'Transportista',
  'ADMIN' = 'Administrador',
  'CONSULTOR' = 'Consultor'
}
