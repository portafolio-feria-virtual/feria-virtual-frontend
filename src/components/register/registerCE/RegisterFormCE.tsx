import { Link, useNavigate } from 'react-router-dom';

import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';

import { toast } from 'react-hot-toast';

import { useUsers } from '../../../hooks/useUsers';

import { DefaultButton, Input, LoadingButton, Country } from '../../ui';
import { IRegister, IUser, UserTypes } from '../../../interfaces/interfaces';

const RegisterFormCE = () => {
  const { register } = useUsers();
  const navigate = useNavigate();

  const initialValues: IRegister = {
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    address: '',
    phone: '',
    country: '',
    password: '',
    confirmPassword: '',
    tipo_usuario: UserTypes.CLIENTE_EXTERNO,
    terms: false
  };

  const validationSchema = Yup.object({
    first_name: Yup.string().required('* Este campo es requerido.'),
    last_name: Yup.string().required('* Este campo es requerido.'),
    username: Yup.string().required('* Este campo es requerido.'),
    email: Yup.string()
      .email('* Ingrese un correo válido')
      .required('* Este campo es requerido.'),
    address: Yup.string().required('* Este campo es requerido.'),
    phone: Yup.string().required('* Este campo es requerido.'),
    country: Yup.string().required('* Este campo es requerido.'),
    password: Yup.string()
      .required('* Este campo es requerido.')
      .min(8, '* La contraseña debe tener al menos 8 caracteres.'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], '* Las contraseñas no coinciden.')
      .required('* Este campo es requerido.')
      .min(8, '* La contraseña debe tener al menos 8 caracteres.'),
    terms: Yup.boolean().oneOf(
      [true],
      '* Debe aceptar los términos y condiciones.'
    )
  });

  const onSubmit = (values: IUser, actions: FormikHelpers<IRegister>) => {
    const user: IUser = {
      first_name: values.first_name,
      last_name: values.last_name,
      username: values.username,
      email: values.email,
      address: values.address,
      phone: values.phone,
      country: values.country,
      password: values.password,
      tipo_usuario: values.tipo_usuario
    };

    setTimeout(async () => {
      actions.setSubmitting(false);

      const response = await register(user);

      if (response?.status !== 201) {
        toast.error('El usuario ya existe.');
        return;
      }

      toast.success('Usuario registrado con éxito.');
      actions.resetForm();

      setTimeout(() => {
        navigate('/ingreso', { replace: true });
      }, 1000);
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
        <form onSubmit={handleSubmit} className="space-y-5 max-w-3xl mx-auto">
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
            <Input
              type="text"
              name="first_name"
              label="Nombre *"
              placeholder="Jhon"
              value={values.first_name}
              touched={touched.first_name}
              errors={errors.first_name}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <Input
              type="text"
              name="last_name"
              label="Apellido *"
              placeholder="Doe"
              value={values.last_name}
              touched={touched.last_name}
              errors={errors.last_name}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <Input
              type="text"
              name="username"
              label="Nombre de usuario *"
              placeholder="jhondoe"
              value={values.username}
              touched={touched.username}
              errors={errors.username}
              onChange={handleChange}
              onBlur={handleBlur}
            />

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
          </div>

          <Input
            type="text"
            name="address"
            label="Dirección *"
            placeholder="Calle 123, Ciudad, País"
            value={values.address}
            touched={touched.address}
            errors={errors.address}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
            <Input
              type="tel"
              name="phone"
              label="Teléfono"
              placeholder="123456789"
              value={values.phone}
              onChange={handleChange}
            />

            <Country
              name="country"
              value={values.country}
              touched={touched.country}
              errors={errors.country}
              onChange={handleChange}
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

            <Input
              type="password"
              name="confirmPassword"
              label="Repita su contraseña *"
              placeholder="********"
              value={values.confirmPassword}
              touched={touched.confirmPassword}
              errors={errors.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>

          <div className="flex flex-col py-5">
            <div className="flex items-center space-x-3 mb-2">
              <input
                type="checkbox"
                name="terms"
                id="terms"
                className="md:ml-auto"
                checked={values.terms}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <label htmlFor="terms">
                He leído y acepto los <strong>términos y condiciones</strong>
              </label>
            </div>

            {touched.terms && errors.terms && (
              <span className="text-red-500 text-xs italic pt-2 ml-auto">
                {errors.terms}
              </span>
            )}
          </div>

          {isSubmitting ? (
            <LoadingButton type="submit" text="Registrando..." disabled />
          ) : (
            <DefaultButton type="submit" text="Registrarse" />
          )}

          <p className="text-center text-gray-500">
            ¿Ya tiene una cuenta?{' '}
            <Link to="/ingreso">
              <strong>Inicie sesión</strong>
            </Link>
          </p>
        </form>
      )}
    </Formik>
  );
};

export default RegisterFormCE;
