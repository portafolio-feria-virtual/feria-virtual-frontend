import { toast } from 'react-hot-toast';

import { register, login } from '../services/auth.service';
import { IRegister, ILogin } from '../../interfaces/interfaces';

export const registerController = async (user: IRegister) => {
  try {
    return await register(user);
  } catch (error) {
    toast.error('An unexpected error occurred');
    console.error(error);
  }
};

export const loginController = async (user: ILogin) => {
  try {
    return await login(user);
  } catch (error) {
    toast.error('An unexpected error occurred');
    console.error(error);
  }
};
