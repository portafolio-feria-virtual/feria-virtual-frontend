import { Navigate, Outlet } from 'react-router-dom';
import { useUsers } from '../../hooks/useUsers';

export const ProtectedRoute = () => {
  const { isAuth } = useUsers();

  return isAuth ? <Outlet /> : <Navigate to="/ingreso" replace />;
};
