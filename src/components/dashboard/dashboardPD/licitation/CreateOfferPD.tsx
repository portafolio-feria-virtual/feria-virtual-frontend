import { Formik } from 'formik';
import { Input, Modal } from '../../../ui';
import { Button } from '../../../ui/Button';
import { useState } from 'react';
import { sidebarPD } from '../../../utils/sidebarItems';

const CreateOfferPD = ({
  licitation,
  name,
  description,
  value
}: {
  licitation: string;
  name: string;
  description: string;
  value: number;
}) => {
  const initialValues = {
    productor: '',
    licitation: licitation,
    name: name,
    description: description,
    value: value,
    fileName: ''
  };

  const onSubmit = (values: any) => {
    console.log(values);
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button onClick={handleOpen} className="px-2 py-1 bg-green-500 text-white rounded-md">
        Crear Oferta
      </button>

      <Modal isOpen={open} onRequestClose={handleClose}>
        <h2>Crear oferta</h2>

        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({ values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
            <form onSubmit={handleSubmit} className="space-y-5 max-w-2xl mt-10">
              <Input
                type="text"
                name="productor"
                label="Productor *"
                value={sidebarPD.userName}
                touched={touched.productor}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled
              />
              <div className="grid grid-cols-2 gap-x-5 w-full">
                <Input
                  type="text"
                  name="licitation"
                  label="Licitación *"
                  value={licitation}
                  touched={licitation}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled
                />
                <Input
                  type="text"
                  name="name"
                  label="Nombre licitación *"
                  value={name}
                  touched={name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled
                />
              </div>
              <Input
                type="text"
                name="description"
                label="Descripción *"
                value={description}
                touched={description}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled
              />

              <Input
                type="number"
                name="value"
                label="Valor *"
                value={value}
                touched={value}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled
              />

              <Input
                type="file"
                name="fileName"
                label='Archivo "PDF" *'
                value={values.fileName}
                touched={touched.fileName}
                errors={errors.fileName}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <Button text="Crear Oferta" loading={isSubmitting} />
            </form>
          )}
        </Formik>
      </Modal>
    </>
  );
};

export default CreateOfferPD;
