import { Formik, FormikHelpers } from 'formik';
import { Input } from '../../../ui';
import { externalSaleSchema } from '../../../utils/validationSchemas';
import { IExternalSale } from '../../../../interfaces';

export const ExternalSaleForm = () => {
  const initialValues: IExternalSale = {
    name: '',
    description: '',
    fileName: '',
    amount: 0
  };

  const onSubmit = (values: IExternalSale, actions: FormikHelpers<IExternalSale>) => {
    actions.setSubmitting(false);
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={externalSaleSchema} onSubmit={onSubmit}>
      {props => (
        <form onSubmit={props.handleSubmit}>
          <div className="pl-2 mt-12 ">
            <Input
              type="text"
              name="name"
              label="Nombre de la oferta"
              value={props.values.name}
              touched={props.touched.name}
              errors={props.errors.name}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              required
            />
          </div>

          <div className="relative mt-3  block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <Input
              name="description"
              label="Descripcion de oferta"
              placeholder="Oferta por dos unidades..."
              value={props.values.description}
              touched={props.touched.description}
              errors={props.errors.description}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              required
            />
          </div>

          <div className="relative mt-3">
            <Input
              type="text"
              name="amount"
              label="Valor de oferta"
              placeholder="1234567"
              value={props.values.amount}
              touched={props.touched.amount}
              errors={props.errors.amount}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              required
            />
          </div>

          <div className="pl-5">
            <Input
              type="file"
              name="fileName"
              label="Subir pdf oferta"
              placeholder="Seleccionar archivo"
              value={props.values.fileName}
              touched={props.touched.fileName}
              errors={props.errors.fileName}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              required
            />
          </div>
        </form>
      )}
    </Formik>
  );
};
