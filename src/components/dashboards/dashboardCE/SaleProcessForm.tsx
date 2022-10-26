import { FieldArray, Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { Country, DefaultButton, Input } from '../../ui';
import { SaleProcessConfirmation } from './SaleProcessConfirmation';
import { IProcessSale } from '../../../interfaces';

export const SaleProcessForm = () => {
  const initialValues: IProcessSale = {
    id: '',
    name: '',
    description: '',
    closeDate: '',
    country: '',
    region: '',
    city: '',
    street: '',
    postalCode: '',
    productList: [],
    maxAmount: 0,
    initDate: '',
    processStatus: 'Publicada'
  };

  const validateSchema = Yup.object({
    name: Yup.string().required('* Este campo es requerido'),
    description: Yup.string().required('* Este campo es requerido'),
    closeDate: Yup.string().required('* Este campo es requerido'),
    country: Yup.string().required('* Este campo es requerido'),
    region: Yup.string().required('Este campo es requerido'),
    city: Yup.string().required('*Este campo es requerido'),
    street: Yup.string().required('*Este campo es requerido'),
    postalCode: Yup.string().required('*Este campo es requerido'),
    maxAmount: Yup.number().required('*Este campo es requerido'),
    productList: Yup.array().required('*Este campo es requerido')
  });

  const onSubmit = (
    values: IProcessSale,
    actions: FormikHelpers<IProcessSale>
  ) => {
    const date = new Date();

    const processSale: IProcessSale = {
      id: values.id,
      name: values.name,
      description: values.description,
      closeDate: values.closeDate,
      country: values.country,
      region: values.region,
      city: values.city,
      street: values.city,
      postalCode: values.postalCode,
      productList: values.productList,
      maxAmount: values.maxAmount,
      initDate: date.toLocaleDateString('es-ES'),
      processStatus: values.processStatus
    };

    actions.setSubmitting(false);
    console.log(processSale);
  };

  // const addProductList = (values: IProcessSale) => {
  //   values.productList.push();
  //   console.log(values.productList.length);
  // };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validateSchema}
      onSubmit={onSubmit}>
      {({
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit
      }) => (
        <form onSubmit={handleSubmit}>
          <div className="space-y-5 max-w-3xl mx-auto">
            <h3 className=""> Formulario inicio proceso de ventas </h3>
            <div className=" grid gap-5 grid-cols-1 md:grid-cols-2  ">
              <Input
                type="text"
                name="name"
                label=" Nombre proceso"
                placeholder="Ingrese nombre cotización"
                value={values.name}
                touched={touched.name}
                errors={errors.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <Input
                type="text"
                name="description"
                label=" Descripción"
                placeholder="Ingrese nombre cotización"
                value={values.description}
                touched={touched.description}
                errors={errors.description}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <Input
                type="date"
                name="closeDate"
                label=" Fecha cierre"
                placeholder="Ingrese nombre cotización"
                value={values.closeDate}
                touched={touched.closeDate}
                errors={errors.closeDate}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>

            <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
              <Country
                name="country"
                value={values.country}
                touched={touched.country}
                errors={errors.country}
                onChange={handleChange}
              />
              <Input
                type="text"
                name="region"
                label=" Region / Estado"
                value={values.region}
                touched={touched.region}
                errors={errors.region}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <Input
                type="text"
                name="city"
                label="Ciudad"
                value={values.city}
                touched={touched.city}
                errors={errors.city}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <Input
                type="text"
                name="street"
                label="Calle"
                value={values.street}
                touched={touched.street}
                errors={errors.street}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <Input
                type="text"
                name="postalCode"
                label="Codigo postal"
                value={values.postalCode}
                touched={touched.postalCode}
                errors={errors.postalCode}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>

            <div>
              <FieldArray name="productList">
                {({ remove, push }) => (
                  <div className="overflow-x-auto relative">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                          <th>Producto</th>
                          <th>Cantidad(Kg)</th>
                          <th>Accion</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        {values.productList.map((product, index) => (
                          <tr key={index}>
                            <td>
                              <Input
                                type="text"
                                name={`productList[${index}].name`}
                                label=""
                                placeholder="Nombre producto"
                                value={values.productList[index].name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                              />
                            </td>
                            <td>
                              <Input
                                type="number"
                                name={`productList[${index}].amount`}
                                label=""
                                placeholder="Ingrese la cantidad Kg "
                                value={values.productList[index].amount}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                              />
                            </td>
                            <td>
                              <DefaultButton
                                text="Eliminar"
                                type="button"
                                onClick={() => remove(index)}
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
                      <div className="mt-4 flex items-center justify-center bg-green-500 hover:bg-green-700 w-fit text-white font-semibold py-1 px-4 rounded-md focus:outline-none focus:shadow-outline">
                        <DefaultButton
                          text="Agregar producto lista"
                          type="button"
                          onClick={() => push({ id: '', name: '', amount: 0 })}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </FieldArray>

              <Input
                type="text"
                name="maxAmount"
                label="Monto maximo estimado $"
                value={values.maxAmount}
                touched={touched.maxAmount}
                errors={errors.maxAmount}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>

            <SaleProcessConfirmation>
              <div className=" grid gap-5 grid-cols-1 md:grid-cols-2  ">
                <label>Proceso: {values.name}</label>
                <label>Descripcion: {values.description}</label>
                <label>Fecha Cierre: {values.closeDate}</label>
              </div>

              <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
                <label>Pais: {values.country}</label>
                <label>Region / estado: {values.region}</label>
                <label>Ciudad: {values.city}</label>
                <label>Calle: {values.street}</label>
                <label>Codigo postal: {values.postalCode}</label>
              </div>
              <div className="overflow-x-auto relative">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th>Producto</th>
                      <th>Cantidad(Kg)</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    {values.productList.map((product, index) => (
                      <tr key={index}>
                        <td>{product.name}</td>
                        <td>{product.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <label>Monto estimado:${values.maxAmount}</label>
              </div>
            </SaleProcessConfirmation>
          </div>
        </form>
      )}
    </Formik>
  );
};
