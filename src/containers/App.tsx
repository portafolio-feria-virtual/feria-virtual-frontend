import { Routes, Route, Navigate } from 'react-router-dom';

import { AuthProvider } from '../context/providers/AuthProvider';

import Layout from '../components/layout';

import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import RestorePage from '../pages/RestorePage';
import {
  RegisterCE,
  RegisterCI,
  RegisterPD,
  RegisterTA
} from '../components/register/';

import Dashboard from '../components/dashboards/Dashboard';

import { ProtectedRoute } from './utils/ProtectedRoutes';

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<div>Home</div>} />

          <Route path="/ingreso" element={<LoginPage />} />

          <Route path="/registro" element={<RegisterPage />}>
            <Route
              path="/registro"
              element={<Navigate to="cliente-extrajero" replace />}
            />
            <Route path="cliente-extrajero" element={<RegisterCE />} />
            <Route path="cliente-local" element={<RegisterCI />} />
            <Route path="productor" element={<RegisterPD />} />
            <Route path="transportista" element={<RegisterTA />} />
          </Route>

          <Route path="/restablecer" element={<RestorePage />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route path="/panel/usuario" element={<Dashboard />} />
        </Route>

        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </AuthProvider>
  );
};

//No me rechazes

export default App;
