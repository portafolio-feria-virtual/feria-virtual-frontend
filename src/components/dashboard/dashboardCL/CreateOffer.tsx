import { Formik } from 'formik';
import { Input } from '../../ui/Input';
import { Button } from '../../ui';
const CreateOffer = () => {
  const initialValues = {
    title: '',
    quantity: ''
  };

  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <>
      <h2>Crear oferta</h2>

      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit} className="space-y-5 max-w-2xl mt-10">
            <Input
              type="text"
              name="title"
              label="Título *"
              placeholder="Ingrese el título de la publicación"
              value={values.title}
              touched={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Input
              type="number"
              name="quantity"
              label="Cantidad *"
              placeholder="Ingrese la cantidad *"
              value={values.quantity}
              touched={values.quantity}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <Button text="Modificar" loading={isSubmitting} />
          </form>
        )}
      </Formik>
    </>
  );
};

export default CreateOffer;
