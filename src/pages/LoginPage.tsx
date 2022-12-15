import { Toaster } from 'react-hot-toast';

import { UserLoginForm } from '../components/login/userLogin';
import { Title } from '../components/ui';

import LoginImage from '../assets/images/login_image.svg';

const LoginPage = () => {
  return (
    <div className="pt-10 px-4 xl:py-10 max-w-7xl w-full mx-auto">
      <div className="flex gap-10 flex-col items-center h-full lg:flex-row justify-between">
        <div className="w-full max-w-xl">
          <Title
            title="Ingreso"
            body="Introduzca su usuario y contraseña para acceder a la plataforma."
          />

          <UserLoginForm />
        </div>

        <img src={LoginImage} alt="Login image" className="max-w-xl lg:w-full" />
      </div>

      <Toaster position="top-right" />
    </div>
  );
};

export default LoginPage;
