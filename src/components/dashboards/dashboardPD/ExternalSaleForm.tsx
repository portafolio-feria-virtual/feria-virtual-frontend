import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { DefaultButton, Input, LoadingButton } from '../../ui';
import { IExternalSale } from '../../../interfaces';

const ExternalSaleForm = () => {
  const initialValues: IExternalSale = {
    id: '',
    offerName: '',
    offerDescription: '',
    offerFile: '',
    offerValue: 0
  };
  const validationSchema = Yup.object({
    companyName: Yup.string().required('* Este campo es requerido.'),
    endDate: Yup.string().required('* Este campo es requerido.'),
    initDate: Yup.string().required('* Este campo es requerido.'),
    fileName: Yup.string().required('* Este campo es requerido.')
  });

  const onSubmit = (
    values: IExternalSale,
    actions: FormikHelpers<IExternalSale>
  ) => {
    actions.setSubmitting(false);
    console.log(values);
  };

  return (
    <div className="flex flex-col items-center ">
      <h2 className="pl-20 text-green-600">
        ¡Bienvenido a postulacion de oferta!
      </h2>

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
            <div className="pl-2 mt-12 ">
              <Input
                type="text"
                name="offerName"
                label="Nombre de la oferta"
                placeholder="Subasta"
                required
                value={values.offerName}
                touched={touched.offerName}
                errors={errors.offerName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>

            <div className="relative mt-3  block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <Input
                type="message"
                name="descriptionOffer"
                label="Descripcion de oferta"
                placeholder="Oferta por dos unidades"
                required
                value={values.offerDescription}
                touched={touched.offerDescription}
                errors={errors.offerDescription}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>

            <div className="relative mt-3">
              <Input
                type="text"
                name="offerValue"
                label="Valor de oferta"
                placeholder="00000"
                required
                value={values.offerValue}
                touched={touched.offerValue}
                errors={errors.offerValue}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>

            <div className="pl-5">
              <Input
                type="file"
                name="fileOffer"
                label="Subir pdf oferta"
                placeholder="file"
                required
                value={values.offerFile}
                touched={touched.offerFile}
                errors={errors.offerFile}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>

            <div className=" mt-12 flex items-center justify-center bg-green-500 hover:bg-green-700 w-fit text-white font-semibold py-1 px-4 rounded-md focus:outline-none focus:shadow-outline">
              {isSubmitting ? (
                <LoadingButton text="Ingresando..." type="submit" />
              ) : (
                <DefaultButton text="Postular Oferta" type="submit" />
              )}
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default ExternalSaleForm;
