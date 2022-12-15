import { useEffect, useReducer } from 'react';
import { AxiosError } from 'axios';
import { AuthContext } from '../authContext';
import { authReducer, INITIAL_STATE } from '../reducers/authReducer';
import { get, post } from '../../api';
import { URL_GET_CSRF, URL_SIGNIN, URL_SIGNUP } from '../../constants';
import { IAuthContext, UserType, ILogin, IUser } from '../../interfaces';
import { useLocalStorage } from '../../hooks';

type Props = {
  children: JSX.Element | JSX.Element[];
};

export const AuthProvider = ({ children }: Props) => {
  const [authState, dispatch] = useReducer(authReducer, INITIAL_STATE);
  const [isAuth, setIsAuth, removeAuth] = useLocalStorage('isAuth', false);

  /**
   * GetCsrf() is an async function that uses the get() function to make a request to the server to
   * get a csrf token, and then sets the csrf token in the state.
   */
  // useEffect(() => {
  //   const getCsrf = async () => {
  //     const { data } = await get(URL_GET_CSRF, {
  //       withCredentials: true
  //     });
  //     dispatch({ type: 'SET_CSRF', payload: data.csrfToken });
  //   };

  //   if (authState.csrfToken === null) {
  //     getCsrf();
  //   }
  // }, []);

  /**
   * SignIn is a function that takes an object of type ILogin and returns a promise that resolves to a
   * number or undefined.
   * @param {ILogin} user - ILogin - this is the user object that is passed in from the form.
   * @returns The status code of the response.
   */
  const signIn = async (user: ILogin): Promise<number | undefined> => {
    console.log(user);
    try {
      const { status } = await post<ILogin>(URL_SIGNIN, user, {
        withCredentials: true,
        headers: {
          'X-CSRFToken': `${authState.csrfToken}`
        }
      });

      console.log(status);

      dispatch({ type: 'SIGNIN', payload: status });
      setIsAuth(true);

      return status;
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        const { status } = axiosError.response;
        return status;
      }
    }
  };

  /**
   * "If the user type is equal to one of the four types, then set the signUpType variable to the
   * corresponding string, and then make a post request to the corresponding endpoint, and return the
   * status of the response."
   *
   * I'm trying to refactor this function to be more concise and readable
   * @param {IRegister} user - IRegister
   * @returns The status code of the request.
   */
  const signUp = async (user: IUser): Promise<number | undefined> => {
    try {
      let signUpType;

      if (user.type === UserType.CLIENTE_EXTRANJERO) signUpType = 'signupExt';
      if (user.type === UserType.CLIENTE_LOCAL) signUpType = 'signupLoc';
      if (user.type === UserType.PRODUCTOR) signUpType = 'signupPro';
      if (user.type === UserType.TRANSPORTISTA) signUpType = 'signupTra';

      const { status } = await post<IUser>(`${URL_SIGNUP}${signUpType}/`, user);

      dispatch({ type: 'SIGNUP', payload: status });

      return status;
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        const { status } = axiosError.response;
        return status;
      }
    }
  };

  return (
    <AuthContext.Provider value={{ authState, signIn, signUp, isAuth, removeAuth } as IAuthContext}>
      {children}
    </AuthContext.Provider>
  );
};
