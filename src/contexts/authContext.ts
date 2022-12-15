import { createContext, useContext } from 'react';
import { IAuthContext } from '../interfaces';

/* Creating a context object with an empty object as the default value. */
export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

/**
 * "If the AuthContext is not available, throw an error. Otherwise, return the AuthContext."
 *
 * Now, let's look at the AuthContextProvider component.
 * @returns The context object.
 */
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(
      'useAuthContext must be used within an AuthContextProvider'
    );
  }
  return context;
};
