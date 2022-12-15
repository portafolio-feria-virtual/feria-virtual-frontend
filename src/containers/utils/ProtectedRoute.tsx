import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../hooks';

export const ProtectedRoute = () => {
  const { isAuth } = useAuth();

  return isAuth ? <Outlet /> : <Navigate to="/ingreso" replace />;
};
