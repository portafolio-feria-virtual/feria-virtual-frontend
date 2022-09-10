import { IRegister, ILogin } from '../../interfaces/interfaces';
import { authContext } from '../authContext';

type props = {
  children: JSX.Element;
};

export const AuthProvider = ({ children }: props) => {
  const register = async (user: IRegister) => {
    const response = await fetch('http://localhost:5000/api/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    const data = await response.json();
    return data;
  };

  const login = async (user: ILogin) => {
    const response = await fetch('http://localhost:5000/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    const data = await response.json();
    return data;
  };

  return (
    <authContext.Provider
      value={{
        register,
        login
      }}>
      {children}
    </authContext.Provider>
  );
};
