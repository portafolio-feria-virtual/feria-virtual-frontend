import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  email: Yup.string().required('* Este campo es requerido.').email('* Ingrese un correo válido.'),
  password: Yup.string().required('* Este campo es requerido.')
});

export const registerSchemaCE = Yup.object().shape({
  firstName: Yup.string().required('* Este campo es requerido.'),
  lastName: Yup.string().required('* Este campo es requerido.'),
  username: Yup.string().required('* Este campo es requerido.'),
  email: Yup.string().email('* Ingrese un correo válido').required('* Este campo es requerido.'),
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
  terms: Yup.boolean().oneOf([true], '* Debe aceptar los términos y condiciones.')
});

export const registerSchemaCL = Yup.object().shape({
  firstName: Yup.string().required('* Este campo es requerido.'),
  lastName: Yup.string().required('* Este campo es requerido.'),
  username: Yup.string().required('* Este campo es requerido.'),
  email: Yup.string().email('* Ingrese un correo válido.').required('* Este campo es requerido.'),
  address: Yup.string().required('* Este campo es requerido.'),
  phone: Yup.string(),
  rut: Yup.string()
    .required('* Este campo es requerido.')
    .matches(/^[0-9]+-[0-9kK]{1}$/, '* Ingrese un RUT válido (11111111-1).'),
  documentNumber: Yup.string().required('* Este campo es requerido.'),
  businessName: Yup.string().required('* Este campo es requerido.'),
  password: Yup.string()
    .required('* Este campo es requerido.')
    .min(8, '* La contraseña debe tener al menos 8 caracteres.'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], '* Las contraseñas no coinciden.')
    .required('* Este campo es requerido.')
    .min(8, '* La contraseña debe tener al menos 8 caracteres.'),
  terms: Yup.boolean().oneOf([true], '* Debe aceptar los términos y condiciones.')
});

export const registerSchemaPD = Yup.object().shape({
  firstName: Yup.string().required('* Este campo es requerido.'),
  lastName: Yup.string().required('* Este campo es requerido.'),
  username: Yup.string().required('* Este campo es requerido.'),
  email: Yup.string().email('* Ingrese un correo válido.').required('* Este campo es requerido.'),
  address: Yup.string().required('* Este campo es requerido.'),
  phone: Yup.string(),
  rut: Yup.string()
    .required('* Este campo es requerido.')
    .matches(/^[0-9]+-[0-9kK]{1}$/, '* Ingrese un RUT válido.'),
  documentNumber: Yup.string().required('* Este campo es requerido.'),
  businessName: Yup.string().required('* Este campo es requerido.'),
  productType: Yup.string().required('* Este campo es requerido.'),
  password: Yup.string().required('* Este campo es requerido.'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], '* Las contraseñas no coinciden.')
    .required('* Este campo es requerido.'),
  terms: Yup.boolean().oneOf([true], '* Debe aceptar los términos y condiciones.')
});

export const registerSchemaTA = Yup.object().shape({
  firstName: Yup.string().required('* Este campo es requerido.'),
  lastName: Yup.string().required('* Este campo es requerido.'),
  username: Yup.string().required('* Este campo es requerido.'),
  email: Yup.string().email('* Ingrese un correo válido.').required('* Este campo es requerido.'),
  address: Yup.string().required('* Este campo es requerido.'),
  phone: Yup.string(),
  rut: Yup.string()
    .required('* Este campo es requerido.')
    .matches(/^[0-9]+-[0-9kK]{1}$/, '* Ingrese un RUT válido.'),
  documentNumber: Yup.string().required('* Este campo es requerido.'),
  capacity: Yup.string().required('* Este campo es requerido.'),
  size: Yup.string().required('* Este campo es requerido.'),
  cooling: Yup.boolean().required('* Este campo es requerido.'),
  password: Yup.string().required('* Este campo es requerido.'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], '* Las contraseñas no coinciden.')
    .required('* Este campo es requerido.'),
  terms: Yup.boolean().oneOf([true], '* Debe aceptar los términos y condiciones.')
});

export const localSaleSchema = Yup.object().shape({
  title: Yup.string().required('* Este campo es requerido.'),
  price: Yup.number().required('* Este campo es requerido.'),
  stock: Yup.number().required('* Este campo es requerido.'),
  image: Yup.string().required('* Este campo es requerido.'),
  ubication: Yup.string().required('* Este campo es requerido.')
});

export const externalSaleSchema = Yup.object().shape({
  name: Yup.string().required('* Este campo es requerido.'),
  description: Yup.string().required('* Este campo es requerido.'),
  fileName: Yup.string().required('* Este campo es requerido.'),
  amount: Yup.number().required('* Este campo es requerido.')
});

export const contractSchema = Yup.object().shape({
  companyName: Yup.string().required('* Este campo es requerido.'),
  endDate: Yup.date().required('* Este campo es requerido.'),
  initDate: Yup.date().required('* Este campo es requerido.'),
  fileName: Yup.string().required('* Este campo es requerido.')
});

export const processSaleSchema = Yup.object().shape({
  name: Yup.string().required('* Este campo es requerido'),
  description: Yup.string().required('* Este campo es requerido'),
  endDate: Yup.string().required('* Este campo es requerido'),
  country: Yup.string().required('* Este campo es requerido'),
  region: Yup.string().required('Este campo es requerido'),
  city: Yup.string().required('*Este campo es requerido'),
  street: Yup.string().required('*Este campo es requerido'),
  postalCode: Yup.string().required('*Este campo es requerido'),
  maxAmount: Yup.number().required('*Este campo es requerido'),
  productList: Yup.array().required('*Este campo es requerido')
});
