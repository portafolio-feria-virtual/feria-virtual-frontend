import { IRegister } from '../../../interfaces/interfaces';
import * as Yup from 'yup';
import { FormikHelpers, Formik } from 'formik';
import { DefaultButton, Input, LoadingButton } from '../../ui';
import { Link } from 'react-router-dom';
import { registerController } from '../../../api/controllers/auth.controller';

const RegisterFormTa = () => {
  const initialValues: IRegister = {
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    address: '',
    phone: '',
    rut: '',
    doc_num: '',
    capacity: '',
    size: '',
    cooling: false,
    password: '',
    confirmPassword: '',
    tipo_usuario: '3',
    terms: false
  };

  const validationSchema = Yup.object({
    first_name: Yup.string().required('* Este campo es requerido.'),
    last_name: Yup.string().required('* Este campo es requerido.'),
    username: Yup.string().required('* Este campo es requerido.'),
    email: Yup.string()
      .email('* Ingrese un correo válido.')
      .required('* Este campo es requerido.'),
    address: Yup.string().required('* Este campo es requerido.'),
    phone: Yup.string(),
    rut: Yup.string()
      .required('* Este campo es requerido.')
      .matches(/^[0-9]+-[0-9kK]{1}$/, '* Ingrese un RUT válido.'),
    doc_num: Yup.string().required('* Este campo es requerido.'),
    capacity: Yup.string(),
    size: Yup.string(),
    cooling: Yup.boolean(),
    password: Yup.string().required('* Este campo es requerido.'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], '* Las contraseñas no coinciden.')
      .required('* Este campo es requerido.'),
    terms: Yup.boolean().oneOf(
      [true],
      '* Debe aceptar los términos y condiciones.'
    )
  });

  const onSubmit = (values: IRegister, actions: FormikHelpers<IRegister>) => {
    setTimeout(() => {
      const user = {
        ...values,
        tipo_usuario: '3'
      };

      registerController(user);

      actions.setSubmitting(false);
      actions.resetForm();
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
              value={values.username}
              touched={touched.username}
              errors={errors.username}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <Input
              type="tel"
              name="phone"
              label="Teléfono"
              value={values.phone}
              touched={touched.phone}
              errors={errors.phone}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>

          <Input
            type="email"
            name="email"
            label="Correo *"
            value={values.email}
            touched={touched.email}
            errors={errors.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <Input
            type="text"
            name="address"
            label="Dirección *"
            value={values.address}
            touched={touched.address}
            errors={errors.address}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
            <Input
              type="text"
              name="rut"
              label="Rut (11111111-1) *"
              value={values.rut}
              touched={touched.rut}
              errors={errors.rut}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <Input
              type="text"
              name="doc_num"
              label="Número de documento *"
              value={values.doc_num}
              touched={touched.doc_num}
              errors={errors.doc_num}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between md:items-center gap-5">
            <Input
              type="text"
              name="capacity"
              label="Capacidad de carga (kg)"
              value={values.capacity}
              onChange={handleChange}
            />

            <Input
              type="text"
              name="size"
              label="size (m2)"
              value={values.size}
              onChange={handleChange}
            />

            <div className="flex flex-col">
              <div className="flex items-center space-x-3 py-5">
                <input
                  type="checkbox"
                  name="cooling"
                  id="cooling"
                  className="md:ml-auto"
                  checked={values.cooling}
                  onChange={handleChange}
                />
                <label htmlFor="cooling" className="text-green-500">
                  Refrigeración
                </label>
              </div>

              {touched.cooling && errors.cooling && (
                <span className="text-red-500 text-sm ml-auto">
                  {errors.terms}
                </span>
              )}
            </div>
          </div>

          <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
            <Input
              type="text"
              name="password"
              label="Contraseña *"
              value={values.password}
              touched={touched.password}
              errors={errors.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <Input
              type="text"
              name="confirmPassword"
              label="Repita su contraseña *"
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

export default RegisterFormTa;
