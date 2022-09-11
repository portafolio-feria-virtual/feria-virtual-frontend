import { useAuthContext } from '../context/authContext';

export const useUsers = () => {
  const { authState, register, login, logout, isAuth } = useAuthContext();

  const { user, error } = authState;

  return { user, isAuth, error, register, login, logout };
};
