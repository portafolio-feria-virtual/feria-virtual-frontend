import { Outlet } from 'react-router-dom';
import { Title } from '../components/ui';
import { RegisterOptions } from '../components/register';
import { Toaster } from 'react-hot-toast';

const RegisterPage = () => {
  return (
    <div className="p-4 max-w-3xl w-full mx-auto py-10">
      <Title
        title="Registro"
        body="Seleccione su rol e ingrese los datos requeridos para crear su cuenta con éxito."
      />

      <RegisterOptions />

      <Outlet />

      <Toaster position="top-right" />
    </div>
  );
};

export default RegisterPage;
