import { products, ubicaciones } from '../ui/utils';
import ProductCard from './ProductCard';

const Marketplace = () => {
  return (
    <>
      <h2>Marketplace</h2>

      <div>
        <form className="my-5">
          <select
            name="ubications"
            id="ubications"
            placeholder="Ubicación"
            className="bg-slate-100/80 text-start p-2 w-52">
            <option value="" disabled>
              Ubicación
            </option>
            {ubicaciones.map(ubicacion => (
              <option key={ubicacion.id} value={ubicacion.name}>
                {ubicacion.name}
              </option>
            ))}
          </select>

          <button className="ml-5">Aplicar filtros</button>
        </form>

        <span>
          <strong>{products.length}</strong>
          {products.length <= 1 ? ' producto.' : ' productos.'}
        </span>

        <div className="mt-2 max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 place-items-center items-start">
          {products.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Marketplace;
