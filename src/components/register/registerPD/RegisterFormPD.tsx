import { Link, useNavigate } from 'react-router-dom';
import { Formik, FormikHelpers } from 'formik';
import { toast } from 'react-hot-toast';

import { useAuth } from '../../../hooks/useAuth';
import { Input, Button } from '../../ui';
import { registerSchemaPD } from '../../utils';
import { IRegister, UserType } from '../../../interfaces';

const RegisterFormPD = () => {
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const initialValues: IRegister = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    address: '',
    phone: '',
    rut: '',
    documentNumber: '',
    businessName: '',
    productType: '',
    password: '',
    confirmPassword: '',
    terms: false,
    type: UserType.CLIENTE_LOCAL
  };

  const onSubmit = (values: IRegister, actions: FormikHelpers<IRegister>) => {
    actions.setSubmitting(true);
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    const { confirmPassword, terms, ...user } = values;

    setTimeout(async () => {
      const status = await signUp(user);

      if (status !== 201) {
        toast.error('El usuario ya existe');
        actions.setSubmitting(false);
        return;
      }

      toast.success('Usuario registrado con éxito');
      actions.setSubmitting(false);
      actions.resetForm();

      setTimeout(() => {
        navigate('/login');
      }, 1000);
    }, 1500);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={registerSchemaPD} onSubmit={onSubmit}>
      {({ values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
        <form onSubmit={handleSubmit} className="space-y-5 max-w-3xl mx-auto">
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
            <Input
              type="text"
              name="firstName"
              label="Nombre *"
              placeholder="Jhon"
              value={values.firstName}
              touched={touched.firstName}
              errors={errors.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <Input
              type="text"
              name="lastName"
              label="Apellido *"
              placeholder="Doe"
              value={values.lastName}
              touched={touched.lastName}
              errors={errors.lastName}
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
              type="tel"
              name="phone"
              label="Teléfono *"
              placeholder="123456789"
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
            placeholder="correo@ejemplo.com"
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
            placeholder="Calle 123, Ciudad, País"
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
              placeholder="11111111-1"
              value={values.rut}
              touched={touched.rut}
              errors={errors.rut}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <Input
              type="text"
              name="documentNumber"
              label="Número de documento *"
              placeholder="123456789"
              value={values.documentNumber}
              touched={touched.documentNumber}
              errors={errors.documentNumber}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>

          <Input
            type="text"
            name="businessName"
            label="Razón social *"
            placeholder="Razón social"
            value={values.businessName}
            touched={touched.businessName}
            errors={errors.businessName}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <Input
            type="text"
            name="productType"
            label="Tipos de producto (Manzana, pera, etc.) *"
            placeholder="Manzana, pera"
            value={values.productType}
            touched={touched.productType}
            errors={errors.productType}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
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
              <span className="text-red-500 text-xs italic pt-2 ml-auto">{errors.terms}</span>
            )}
          </div>

          <Button text="Registrarse" loading={isSubmitting} />

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

export default RegisterFormPD;
