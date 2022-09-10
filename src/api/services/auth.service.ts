import { ILogin, IRegister } from '../../interfaces/interfaces';
import http from '../config/http-common';
import axios from 'axios';

export const register = async (user: IRegister) => {
  console.log(user);

  const response = await fetch('http://127.0.0.1:8000/api/auth/signup/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': ''
    },
    body: JSON.stringify(user)
  });

  console.log(response);

  // try {
  //   const { data } = await http.post<IRegister>('/auth/signup', user, {
  //     headers: {
  //       'Content-type': 'application/json',
  //       Accept: 'application/json'
  //     }
  //   });

  //   console.log(JSON.stringify(data, null, 2));
  //   return data;
  // } catch (error) {
  //   if (axios.isAxiosError(error)) {
  //     console.error('[Axios Error]: ', error.message);
  //     return error.message;
  //   } else {
  //     console.error('[Server Error]: ', error);
  //     return 'An unexpected error occurred';
  //   }
  // }
};

export const login = async (user: ILogin) => {
  try {
    const { data } = await http.post<ILogin>('/auth/login', user, {
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json'
      }
    });

    console.log(JSON.stringify(data, null, 2));
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('[Axios Error]: ', error.message);
      return error.message;
    } else {
      console.log('[Server Error]: ', error);
      return 'An unexpected error occurred';
    }
  }
};
