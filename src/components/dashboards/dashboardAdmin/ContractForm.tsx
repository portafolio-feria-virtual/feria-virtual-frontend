import { IContract } from '../../../interfaces';
import { DefaultButton, Input, LoadingButton } from '../../ui';
import * as Yup from 'yup';
import { Formik, FormikHelpers } from 'formik';

const ContractForm = () => {
  const initialValues: IContract = {
    idContract: '',
    companyName: '',
    endDate: '',
    initDate: '',
    fileName: ''
  };
  const validationSchema = Yup.object({
    companyName: Yup.string().required('* Este campo es requerido.'),
    endDate: Yup.string().required('* Este campo es requerido.'),
    initDate: Yup.string().required('* Este campo es requerido.'),
    fileName: Yup.string().required('* Este campo es requerido.')
  });

  const onSubmit = (values: IContract, actions: FormikHelpers<IContract>) => {
    actions.setSubmitting(false);
    console.log(values);
  };

  return (
    <div className="flex flex-col items-center ">
      <h2 className="pl-20 text-green-600">
        ¡Bienvenido a la creacion de contratos!
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
                name="companyName"
                label="Empresa de contrato"
                placeholder="Empresa"
                required
                value={values.companyName}
                touched={touched.companyName}
                errors={errors.companyName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>

            <div className="flex items-center pl-5">
              <div className="relative mt-3">
                <Input
                  type="date"
                  name="initDate"
                  label="Fecha Inicio"
                  placeholder="f"
                  required
                  value={values.initDate}
                  touched={touched.initDate}
                  errors={errors.initDate}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <span className="mx-4 text-gray-500 mt-10">--</span>

              <div className="relative mt-3">
                <Input
                  type="date"
                  name="endDate"
                  label="Fecha Termino"
                  placeholder="f"
                  required
                  value={values.endDate}
                  touched={touched.endDate}
                  errors={errors.endDate}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
            </div>
            <div className="pl-5">
              <Input
                type="file"
                name="fileName"
                label="Subir pdf"
                placeholder="file"
                required
                value={values.fileName}
                touched={touched.fileName}
                errors={errors.fileName}
                onChange={handleChange}
                onBlur={handleBlur}
              />{' '}
              {/*agregar filtrado pdf*/}
            </div>

            <div className=" mt-12 flex items-center justify-center bg-green-500 hover:bg-green-700 w-fit text-white font-semibold py-1 px-4 rounded-md focus:outline-none focus:shadow-outline">
              {isSubmitting ? (
                <LoadingButton text="Ingresando..." type="submit" />
              ) : (
                <DefaultButton text="Crear Contrato" type="submit" />
              )}
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default ContractForm;
