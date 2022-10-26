import { Formik, FormikHelpers } from 'formik';
import { Input } from '../../ui';
import { IProductData } from '../../../interfaces';
import { LoadingButton, DefaultButton } from '../../ui/Buttons';

const LocalSaleForm = () => {
  const initialValues: IProductData = {
    id: '',
    title: '',
    price: 0,
    stock: 0,
    img: '',
    ubication: ''
  };

  const onSubmit = (
    values: IProductData,
    actions: FormikHelpers<IProductData>
  ) => {
    actions.setSubmitting(false);
    console.log(values);
    return;
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      }) => (
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
            name="img"
            label="Imagenes del producto"
            value={values.img}
            touched={touched.img}
            errors={errors.img}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {isSubmitting ? (
            <LoadingButton text="Agregando..." type="submit" />
          ) : (
            <DefaultButton text="Agregar" type="submit" />
          )}
        </form>
      )}
    </Formik>
  );
};

export default LocalSaleForm;
