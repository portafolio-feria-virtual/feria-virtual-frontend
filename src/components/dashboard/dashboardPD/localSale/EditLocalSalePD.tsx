import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Button, Input, Modal } from '../../../ui';
import { Formik } from 'formik';
import { localSaleSchema } from '../../../utils';

const EditLocalSalePD = ({
  id,
  title,
  price,
  stock
}: {
  id: number;
  title: string;
  price: number;
  stock: string;
}) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => setOpen(true);

  const initialValues = {
    title: title,
    price: price,
    stock: stock
  };

  const onSubmit = (values: any) => {
    setOpen(false);
    console.log(values, id);
    toast.success('Venta local editada con éxito');
  };

  return (
    <>
      <button onClick={handleOpen} className="bg-yellow-500 px-2 py-1 text-white rounded-md">
        Editar
      </button>

      <Modal isOpen={open} onRequestClose={handleClose}>
        <h2>Editar venta local</h2>

        <Formik
          initialValues={initialValues}
          validationSchema={localSaleSchema}
          onSubmit={onSubmit}>
          {({ values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
            <form onSubmit={handleSubmit} className="space-y-5 max-w-2xl mt-10">
              <Input
                type="text"
                name="title"
                label="Título *"
                placeholder="Ingrese el título de la publicación"
                value={title}
                touched={title}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div className="grid grid-cols-2 gap-x-5 w-full">
                <Input
                  type="number"
                  name="price"
                  label="Precio *"
                  placeholder="Ingrese el precio del producto"
                  value={price}
                  touched={price}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Input
                  type="text"
                  name="stock"
                  label="Stock *"
                  placeholder="Ingrese la cantidad de stock"
                  value={values.stock}
                  touched={touched.stock}
                  errors={errors.stock}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>

              <Button onClick={handleClose} text="Modificar" loading={isSubmitting} />
            </form>
          )}
        </Formik>
      </Modal>
    </>
  );
};

export default EditLocalSalePD;
