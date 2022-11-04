import axios from 'axios';
import { IAuthState, ILogin, IUser } from '../../interfaces';
import { authContext } from '../authContext';
import { useReducer, useState, useEffect } from 'react';
import { authReducer } from '../reducers/authReducer';
import { AxiosError } from 'axios';
import Cookies from 'js-cookie';
import { UserTypes } from '../../interfaces';

type props = {
  children: JSX.Element | JSX.Element[];
};

const INITIAL_STATE: IAuthState = {
  user: null,
  error: ''
};

export const AuthProvider = ({ children }: props) => {
  const [authState, dispatch] = useReducer(authReducer, INITIAL_STATE);
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [csrf, setCsrf] = useState<string | null>(null);

  const getCsrfToken = async () => {
    try {
      if (csrf === null) {
        const { data } = await axios.get(
          'http://localhost:8000/api/auth/csrf_cookie',
          {
            withCredentials: true
          }
        );
        setCsrf(data.csrfToken);
      }
    } catch (error) {
      console.log((error as AxiosError).message);
    }
  };

  const register = async (user: IUser) => {
    console.log(user);

    let userType;

    if (user.type === UserTypes.CLIENTE_EXTRANJERO) userType = 'signupExt';
    if (user.type === UserTypes.CLIENTE_LOCAL) userType = 'signupLoc';
    if (user.type === UserTypes.PRODUCTOR) userType = 'signupPro';
    if (user.type === UserTypes.TRANSPORTISTA) userType = 'signupTra';

    console.log(userType);

    try {
      const response = await axios.post<IUser>(
        `http://localhost:8000/api/auth/${userType}/`,
        user
      );

      if (response.status === 201) {
        dispatch({
          type: 'REGISTER',
          payload: response.data
        });

        return response;
      }

      setIsAuth(false);
      return dispatch({
        type: 'ERROR',
        payload: 'Error al registrar usuario'
      });
    } catch (error) {
      console.log((error as AxiosError).message);
    }
  };

  const login = async (user: ILogin) => {
    try {
      const response = await axios.post<ILogin>(
        'http://localhost:8000/api/auth/login/',
        user,
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrf as string
          }
        }
      );

      if (response.status === 200) {
        dispatch({
          type: 'LOGIN',
          payload: response.data
        });

        setIsAuth(true);

        return response;
      }

      setIsAuth(false);
      return dispatch({
        type: 'ERROR',
        payload: 'Error al iniciar sesión'
      });
    } catch (error) {
      console.log((error as AxiosError).message);
    }
  };

  const logout = async () => {
    try {
      await axios.post('http://localhost:8000/api/auth/logout/', {
        withCredentials: true
      });
      setIsAuth(false);
      dispatch({
        type: 'LOGOUT'
      });
    } catch (error) {
      console.log((error as AxiosError).message);
    }
  };

  const getUser = async () => {
    const cookie = Cookies.get('csrftoken');

    try {
      if (cookie) {
        const response = await axios.get<IUser>(
          'http://localhost:8000/api/auth/user/',
          {
            withCredentials: true,
            headers: {
              'Content-Type': 'application/json'
            }
          }
        );

        dispatch({
          type: 'GET_USER',
          payload: response.data
        });

        setIsAuth(true);
      } else {
        setIsAuth(false);
        return;
      }
    } catch (error) {
      console.log((error as AxiosError).message);
    }
  };

  useEffect(() => {
    getCsrfToken();
  }, []);

  useEffect(() => {
    getUser();

    return () => {
      setIsAuth(false);
    };
  }, []);

  return (
    <authContext.Provider
      value={{
        authState,
        isAuth,
        register,
        login,
        logout,
        getUser
      }}>
      {children}
    </authContext.Provider>
  );
};
