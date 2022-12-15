import { Link, useNavigate } from 'react-router-dom';
import { Formik, FormikHelpers } from 'formik';
import { toast } from 'react-hot-toast';

import { useAuth } from '../../../hooks/useAuth';
import { Input, Button } from '../../ui';
import { loginSchema } from '../../utils';
import { ILogin } from '../../../interfaces';

export const UserLoginForm = () => {
  const navigate = useNavigate();
  const { signIn } = useAuth();

  const initialValues: ILogin = {
    email: '',
    password: ''
  };

  const onSubmit = (user: ILogin, actions: FormikHelpers<ILogin>) => {
    setTimeout(async () => {
      const status = await signIn(user);

      if (status !== 200) {
        toast.error('Credenciales incorrectas.');
        actions.setSubmitting(false);
        return;
      }

      toast.success('Bienvenido a la plataforma.');
      actions.setSubmitting(false);
      actions.resetForm();

      setTimeout(() => {
        navigate('/dashboard');
      }, 1000);
    }, 1500);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={loginSchema} onSubmit={onSubmit}>
      {({ values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div className="space-y-5 mb-10">
            <Input
              type="email"
              name="email"
              label="Correo *"
              placeholder="correo@ejemplo.com"
              value={values.email}
              touched={touched.email}
              errors={errors.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <Input
              type="password"
              name="password"
              label="Contraseña *"
              placeholder="********"
              value={values.password}
              touched={touched.password}
              errors={errors.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>

          <Button text="Ingresar" loading={isSubmitting} />

          <p className="text-right text-gray-500">
            ¿Olvidó su contraseña?{' '}
            <Link to="/restablecer">
              <strong>Ingrese aquí</strong>
            </Link>
          </p>
        </form>
      )}
    </Formik>
  );
};
