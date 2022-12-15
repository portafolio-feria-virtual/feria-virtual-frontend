/* eslint-disable no-unused-vars */
import { IUser } from './user.interface';

export interface IRegister extends IUser {
  confirmPassword: string;
  terms: boolean;
}

export type ILogin = Required<Pick<IUser, 'email' | 'password'>>;

export interface IAuthstate {
  user: IUser | null;
  status: number | null;
  isAuthenticated: boolean;
  csrfToken: string | null;
  loading: boolean;
  error: string | null;
}

export interface IAuthContext {
  isAuth: boolean;
  removeAuth: () => void;
  authState: IAuthstate;
  signIn: (user: ILogin) => Promise<number>;
  signUp: (user: IUser) => Promise<number>;
  signOut: () => Promise<number>;
}

export type AuthActions =
  | { type: 'SET_CSRF'; payload: string }
  | { type: 'SET_USER'; payload: IUser }
  | { type: 'SIGNIN'; payload: number }
  | { type: 'SIGNUP'; payload: number };
