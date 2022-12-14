import { Formik, FormikHelpers } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useUsers } from '../../hooks/useUsers';

import { ILogin } from '../../interfaces';
import { DefaultButton, LoadingButton } from '../ui';
import { Input } from '../ui/Input';

const LoginForm = () => {
  const navigate = useNavigate();

  const { login } = useUsers();

  const initialValues: ILogin = {
    email: '',
    password: ''
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required('* Este campo es requerido.')
      .email('* Ingrese un correo válido.'),
    password: Yup.string().required('* Este campo es requerido.')
  });

  const onSubmit = (values: ILogin, actions: FormikHelpers<ILogin>) => {
    setTimeout(async () => {
      const response = await login(values);

      if (response?.status === 200) {
        navigate('/panel/usuario');
      }

      actions.setSubmitting(false);
    }, 1500);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      {({
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      }) => (
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

          {isSubmitting ? (
            <LoadingButton text="Ingresando..." type="submit" />
          ) : (
            <DefaultButton text="Ingresar" type="submit" />
          )}

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

export default LoginForm;
