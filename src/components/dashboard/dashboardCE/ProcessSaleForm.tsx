import { FieldArray, Formik } from 'formik';
import { IProcessSale } from '../../../interfaces';
import { Country, Input, Modal } from '../../ui';
import { processSaleSchema } from '../../utils';
import { Button } from '../../ui/Button';
import { ProcessSaleConfirmation } from './ProcessSaleConfirmation';

const ProcessSaleForm = () => {
  const initialValues: IProcessSale = {
    id: '',
    name: '',
    description: '',
    endDate: '',
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

  const onSubmit = (values: IProcessSale) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={processSaleSchema} onSubmit={onSubmit}>
      {({ values, touched, errors, handleChange, handleBlur, handleSubmit }) => (
        <form onSubmit={handleSubmit} className="p-4">
          <div className="space-y-5 max-w-3xl">
            <h2> Formulario inicio proceso de ventas </h2>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 ">
              <Input
                type="text"
                name="name"
                label="Nombre proceso *"
                placeholder="Ingrese nombre de cotización"
                value={values.name}
                touched={touched.name}
                errors={errors.name}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />

              <Input
                type="text"
                name="description"
                label="Descripción *"
                placeholder="Ingrese nombre de cotización *"
                value={values.description}
                touched={touched.description}
                errors={errors.description}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />

              <Input
                type="date"
                name="endDate"
                label="Fecha cierre *"
                value={values.endDate}
                touched={touched.endDate}
                errors={errors.endDate}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />

              <Country
                name="country"
                value={values.country}
                touched={touched.country}
                errors={errors.country}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
              <Input
                type="text"
                name="region"
                label=" Región / Estado *"
                value={values.region}
                touched={touched.region}
                errors={errors.region}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />

              <Input
                type="text"
                name="city"
                label="Ciudad *"
                value={values.city}
                touched={touched.city}
                errors={errors.city}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />

              <Input
                type="text"
                name="street"
                label="Calle *"
                value={values.street}
                touched={touched.street}
                errors={errors.street}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />

              <Input
                type="text"
                name="postalCode"
                label="Codigo postal *"
                value={values.postalCode}
                touched={touched.postalCode}
                errors={errors.postalCode}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
            </div>

            <div className="space-y-8 py-5 relative border-2 border-dashed border-green-500 p-4">
              <h2 className="mb-5">Productos</h2>

              <FieldArray name="productList">
                {({ remove, push }) => (
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                      <thead className="text-xs uppercase">
                        <tr className="text-left">
                          <th>Producto</th>
                          <th className="pl-3">Cantidad (Kg)</th>
                          <th className="pl-3">Accion</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white ">
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
                                className="pl-3"
                                required
                              />
                            </td>
                            <td>
                              <button type="button" onClick={() => remove(index)} className="pl-3">
                                Eliminar
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="absolute top-0 right-4 pt-[18px]">
                      <button
                        type="button"
                        onClick={() => {
                          push({ name: '', amount: '' });
                          console.log(values);
                        }}
                        className="bg-green-500 px-4 py-2 rounded-md text-white">
                        Agregar productos
                      </button>
                    </div>
                  </div>
                )}
              </FieldArray>

              <Input
                type="text"
                name="maxAmount"
                label="Monto maximo estimado $"
                placeholder="Ingrese el monto maximo estimado"
                value={values.maxAmount}
                touched={touched.maxAmount}
                errors={errors.maxAmount}
                onChange={handleChange}
                onBlur={handleBlur}
                className="text-inherit"
                required
              />
            </div>

            <ProcessSaleConfirmation {...values} />
          </div>
        </form>
      )}
    </Formik>
  );
};

export default ProcessSaleForm;
