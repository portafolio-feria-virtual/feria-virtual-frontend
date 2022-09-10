import axios from 'axios';
import http from '../config/http-common';
import { ILogin, IRegister } from '../../interfaces/interfaces';
import { toast } from 'react-hot-toast';

export const register = async (user: IRegister) => {
  try {
    const response = await http.post('/auth/signup/', JSON.stringify(user));

    if (response.status !== 201) {
      throw new Error('User not created');
    }

    if (response.status === 201) {
      console.log(response);
      toast.success('Usuario creado con éxito');
      return response;
    }

    return;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('[Axios Error]: ', error.message);
      return error.message;
    } else {
      console.error('[Server Error]: ', error);
      return 'An unexpected error occurred';
    }
  }

  // console.log(user);

  // const res = await fetch('http://127.0.0.1:8000/api/auth/signup/', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify(user)
  // });

  // console.log(res);
  // return res;

  // try {
  //   const { data } = await http.post<IRegister>(
  //     'http://127.0.0.1:8000/api/auth/signup/',
  //     user,
  //     {
  //       headers: {
  //         'Content-type': 'application/json'
  //       }
  //     }
  //   );

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
  const response = await fetch('http://127.0.0.1:8000/api/auth/login/', {
    method: 'POST',
    referrerPolicy: 'same-origin',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });

  console.log(response.status);

  // fetch('http://localhost:8000/api/auth/login/', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify(user)
  // })
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data);
  //     console.log();
  //     return data;
  //   });
  // console.log(response);
  // return response;
  // try {
  //   const { data } = await http.post<ILogin>('/auth/login', user, {
  //     headers: {
  //       'Content-type': 'application/json',
  //       Accept: 'application/json'
  //     }
  //   });
  //   console.log(JSON.stringify(data, null, 2));
  //   return data;
  // } catch (error) {
  //   if (axios.isAxiosError(error)) {
  //     console.log('[Axios Error]: ', error.message);
  //     return error.message;
  //   } else {
  //     console.log('[Server Error]: ', error);
  //     return 'An unexpected error occurred';
  //   }
  // }
};
