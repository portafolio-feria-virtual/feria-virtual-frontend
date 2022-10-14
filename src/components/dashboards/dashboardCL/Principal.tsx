import { IProductData } from '../../../interfaces/marketplace.interface';
import { ProductCard } from '../../marketplace/ProductCard';
import { SearchBar } from '../../marketplace/SearchBar';

const data: IProductData[] = [
  {
    id: '1',
    title: 'Naranjas por kilo',
    price: 3000,
    img: 'https://www.65ymas.com/uploads/s1/23/51/17/naranjas-beneficios-contraindicaciones-y-recomendaciones-con-ellas.jpeg',
    stock: 100,
    ubication: 'Santiago'
  },
  {
    id: '2',
    title: 'Saco de naranjas',
    price: 3500,
    img: 'https://c8.alamy.com/compes/bmtxtj/sacos-de-naranjas-en-un-mercado-al-aire-libre-bmtxtj.jpg',
    stock: 20,
    ubication: 'Melipilla'
  },
  {
    id: '3',
    title: 'Kilo de manzanas',
    price: 5000,
    img: 'https://cdn.foodandwineespanol.com/2021/01/manzanas-licor-de-manzana.jpg',
    stock: 60,
    ubication: 'Melipilla'
  }
];
export const Principal = () => {
  return (
    <div>
      <div className="my-10">
        <SearchBar />
      </div>

      <h2>Recomendados</h2>

      <div className="mx-20 my-10 grid gap-5 grid-cols-1 md:grid-cols-5">
        {data.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};
