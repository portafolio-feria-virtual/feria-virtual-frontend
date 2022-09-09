import { Routes, Route } from 'react-router-dom';

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

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<div>Home</div>} />

        <Route path="/ingreso" element={<LoginPage />} />

        <Route path="/registro" element={<RegisterPage />}>
          <Route path="cliente-externo" element={<RegisterCE />} />
          <Route path="cliente-interno" element={<RegisterCI />} />
          <Route path="productor" element={<RegisterPD />} />
          <Route path="transportista" element={<RegisterTA />} />
        </Route>

        <Route path="/restablecer" element={<RestorePage />} />
      </Route>

      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
};

export default App;
