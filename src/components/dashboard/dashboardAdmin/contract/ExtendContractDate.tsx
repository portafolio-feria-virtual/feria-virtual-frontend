import { Formik } from 'formik';
import { useState } from 'react';
import { Input, Modal } from '../../../ui';
import { Button } from '../../../ui/Button';

const ExtendContractDate = ({ initDate }: { initDate: string }) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => setOpen(false);

  const handleOpen = () => setOpen(true);

  const initialValues = {
    initDate: initDate,
    endDate: ''
  };

  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <>
      <button onClick={handleOpen} className="bg-green-500 text-white px-5 py-2 rounded-lg">
        Extender Fecha
      </button>

      <Modal isOpen={open} onRequestClose={handleClose}>
        <div className="px-5">
          <h2 className="mb-5">Extender Fecha</h2>

          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ values, isSubmitting, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit} className="space-y-5">
                <Input
                  type="date"
                  label="Fecha Creación"
                  name="initDate"
                  value={values.initDate}
                  disabled
                />
                <Input
                  type="date"
                  label="Fecha a Extender"
                  name="endDate"
                  value={values.endDate}
                  onChange={handleChange}
                />

                <Button text="Extender Contrato" loading={isSubmitting} type="submit" />
              </form>
            )}
          </Formik>
        </div>
      </Modal>
    </>
  );
};

export default ExtendContractDate;
