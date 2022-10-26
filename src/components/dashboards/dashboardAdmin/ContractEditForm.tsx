import { IContract } from '../../../interfaces';
import { DefaultButton, Input } from '../../ui';
import * as Yup from 'yup';
import { Formik, FormikHelpers } from 'formik';

const ContractEditForm = (/*{companyName,initDate,endDate,fileName}*/) => {
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
      <h2 className=" text-green-600">Edicion de contratos</h2>
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
            <div className="mt-12 ">
              <Input
                type="text"
                name="companyName"
                label="Empresa de contrato"
                value="Empresa" //agregar variable nombre empresa
                disabled
              />
            </div>

            <div className="flex items-center pl-5">
              <div className="relative mt-3 disabled">
                <Input
                  type="date"
                  name="initDate"
                  label="Fecha Inicio"
                  value="variable" //agregar variable del valor fecha inicio
                  disabled
                />
              </div>
              <span className="mx-4 text-gray-500 mt-10">--</span>

              <div className="relative mt-3">
                <Input
                  type="date"
                  name="endDate"
                  label="Fecha Termino"
                  value="f" //agregar variable de fecha termino
                  required
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
              />
            </div>

            <div className=" mt-12 flex items-center justify-center bg-green-500 hover:bg-green-700 w-fit text-white font-semibold py-1 px-4 rounded-md focus:outline-none focus:shadow-outline">
              <DefaultButton text="Guardar cambios" type="submit" />
            </div>
            <div className=" mt-12 flex items-center justify-center bg-green-500 hover:bg-green-700 w-fit text-white font-semibold py-1 px-4 rounded-md focus:outline-none focus:shadow-outline">
              <DefaultButton text="Cancelar" type="submit" />
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default ContractEditForm;
