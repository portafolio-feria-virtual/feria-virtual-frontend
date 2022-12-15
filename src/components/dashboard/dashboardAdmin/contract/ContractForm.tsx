import { Formik, FormikHelpers } from 'formik';
import { IContract } from '../../../../interfaces';
import { Button, Input, Modal } from '../../../ui';
import { contractSchema } from '../../../utils';
import { useState } from 'react';

const ContractForm = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => setOpen(false);

  const handleOpen = () => setOpen(true);

  const initialValues: IContract = {
    id: '',
    companyName: '',
    endDate: '',
    initDate: '',
    fileName: ''
  };

  const onSubmit = (values: IContract, actions: FormikHelpers<IContract>) => {
    actions.setSubmitting(false);
    console.log(values);
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className="sm:ml-auto w-full sm:w-fit text-white bg-green-500 hover:bg-green-600 font-medium rounded-lg px-5 py-2 mb-2 sm:mb-0 focus:outline-none">
        Crear Contrato
      </button>

      <Modal isOpen={open} onRequestClose={handleClose}>
        <div className="p-4">
          <h2 className="mb-7">Creación de Contratos</h2>

          <Formik
            initialValues={initialValues}
            validationSchema={contractSchema}
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
              <form onSubmit={handleSubmit} className="space-y-6 max-w-xl">
                <Input
                  type="text"
                  name="companyName"
                  label="Nombre Empresa *"
                  placeholder="Escriba el nombre de la empresa"
                  value={values.companyName}
                  touched={touched.companyName}
                  errors={errors.companyName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />

                <div className="flex w-full items-center">
                  <Input
                    type="date"
                    name="initDate"
                    label="Fecha Inicio *"
                    className="w-full"
                    value={values.initDate}
                    touched={touched.initDate}
                    errors={errors.initDate}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  />

                  <div className="mx-4 text-gray-500 mt-6">-</div>

                  <Input
                    type="date"
                    name="endDate"
                    label="Fecha Termino *"
                    className="w-full"
                    value={values.endDate}
                    touched={touched.endDate}
                    errors={errors.endDate}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  />
                </div>

                <Input
                  type="file"
                  name="fileName"
                  label="Adjuntar Archivo *"
                  placeholder="file"
                  value={values.fileName}
                  touched={touched.fileName}
                  errors={errors.fileName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />

                <Button text="Crear Contrato" loading={isSubmitting} />
              </form>
            )}
          </Formik>
        </div>
      </Modal>
    </>
  );
};

export default ContractForm;
