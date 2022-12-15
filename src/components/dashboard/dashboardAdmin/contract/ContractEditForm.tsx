import { IContract } from '../../../../interfaces';
import { contractSchema } from '../../../utils';
import { Formik, FormikHelpers } from 'formik';
import { Button, Input, Modal } from '../../../ui';
import { useState } from 'react';

const ContractEditForm = ({ companyName, initDate }: IContract) => {
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
        className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2 focus:outline-none">
        Editar
      </button>

      <Modal isOpen={open} onRequestClose={handleClose}>
        <h2 className="text-green-600 mb-5">Modificación de contratos</h2>
        <Formik initialValues={initialValues} validationSchema={contractSchema} onSubmit={onSubmit}>
          {({ values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                name="companyName"
                label="Empresa de contrato"
                className="opacity-50"
                value={companyName}
                disabled
              />

              <div className="flex items-center">
                <Input
                  type="date"
                  name="initDate"
                  label="Fecha Inicio"
                  className="opacity-50"
                  value={initDate}
                  disabled
                />

                <span className="mx-4 text-gray-500 mt-10">-</span>

                <Input
                  type="date"
                  name="endDate"
                  label="Fecha Termino *"
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
                label="Subir Contrato *"
                placeholder="file"
                className="cursor-progress"
                value={values.fileName}
                touched={touched.fileName}
                errors={errors.fileName}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />

              <div className="flex flex-col pt-5 space-y-4">
                <Button text="Guardar cambios" loading={isSubmitting} />

                <button
                  onClick={handleClose}
                  className="text-red-500 hover:text-red-700"
                  type="button">
                  Cancelar
                </button>
              </div>
            </form>
          )}
        </Formik>
      </Modal>
    </>
  );
};

export default ContractEditForm;
