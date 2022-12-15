import { Formik, FormikHelpers } from 'formik';
import { IProductData } from '../../../../interfaces';
import { Button, Input } from '../../../ui';
import { localSaleSchema } from '../../../utils';

export const LocalSaleForm = () => {
  const initialValues: IProductData = {
    title: '',
    price: 0,
    stock: 0,
    image: '',
    ubication: ''
  };

  const onSubmit = (values: IProductData, actions: FormikHelpers<IProductData>) => {
    actions.setSubmitting(false);
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={localSaleSchema} onSubmit={onSubmit}>
      {({ values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
        <form onSubmit={handleSubmit} className="space-y-5 max-w-2xl">
          <Input
            type="text"
            name="title"
            label="Título *"
            placeholder="Ingrese el título de la publicación"
            value={values.title}
            touched={touched.title}
            errors={errors.title}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <div className="grid grid-cols-2 gap-x-5 w-full">
            <Input
              type="text"
              name="price"
              label="Precio *"
              placeholder="Ingrese el precio del producto"
              value={values.price}
              touched={touched.price}
              errors={errors.price}
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
          <Input
            type="text"
            name="ubication"
            label="Ubicación *"
            placeholder="Ingrese la ubicación del producto"
            value={values.ubication}
            touched={touched.ubication}
            errors={errors.ubication}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <Input
            type="file"
            name="image"
            label="Imagenes del producto"
            value={values.image}
            touched={touched.image}
            errors={errors.image}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <Button text="Agregar" loading={isSubmitting} />
        </form>
      )}
    </Formik>
  );
};
