import { IUbications, ProductData } from '../../interfaces';
import ProductCard from './ProductCard';

const products: ProductData[] = [
  {
    id: '1',
    title: 'Narajas por kilogramo',
    price: 1020,
    image:
      'https://www.65ymas.com/uploads/s1/23/51/17/naranjas-beneficios-contraindicaciones-y-recomendaciones-con-ellas.jpeg',
    stock: 100,
    ubication: 'Melipilla'
  },
  {
    id: '2',
    title: 'Producto 2',
    price: 3000,
    image:
      'https://c8.alamy.com/compes/bmtxtj/sacos-de-naranjas-en-un-mercado-al-aire-libre-bmtxtj.jpg',
    stock: 50,
    ubication: 'Melipilla'
  }
];

const ubicaciones: IUbications[] = [
  {
    id: 1,
    name: 'Melipilla'
  },
  {
    id: 2,
    name: 'Santiago'
  }
];

const Marketplace = () => {
  return (
    <>
      <h2>Productos Recomendado</h2>

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

        <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 place-items-center items-start">
          {products.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Marketplace;
