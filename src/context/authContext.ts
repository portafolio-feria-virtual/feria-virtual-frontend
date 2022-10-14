/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { AxiosResponse } from 'axios';
import { createContext, useContext } from 'react';
import { IUser, ILogin, IAuthState } from '../interfaces/auth.interface';

interface IAuthContext {
  authState: IAuthState;
  isAuth: boolean;
  register: (user: IUser) => Promise<void | AxiosResponse<IUser, unknown>>;
  login: (user: ILogin) => Promise<void | AxiosResponse<IUser, unknown>>;
  logout: () => void;
  getUser: () => Promise<void | AxiosResponse<IUser, unknown>>;
}

export const authContext = createContext<IAuthContext>({} as IAuthContext);

export const useAuthContext = () => {
  const context = useContext(authContext);
  if (!context) {
    throw new Error(
      'useAuthContext must be used within an AuthContextProvider'
    );
  }
  return context;
};
