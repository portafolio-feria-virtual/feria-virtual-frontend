import { createContext, useContext } from 'react';

export const authContext = createContext({});

export const useAuthContext = () => {
  const context = useContext(authContext);
  if (!context) {
    throw new Error(
      'useAuthContext must be used within an AuthContextProvider'
    );
  }
  return context;
};
