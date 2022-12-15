import { useAuthContext } from '../contexts/authContext';

export const useAuth = () => {
  const { authState, signIn, signUp, isAuth, removeAuth } = useAuthContext();

  const { isAuthenticated, user } = authState;

  return { isAuthenticated, user, signIn, signUp, isAuth, removeAuth };
};
