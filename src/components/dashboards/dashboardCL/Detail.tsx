import { IProductData } from '../../../interfaces/marketplace.interface';
import { FullCard } from '../../marketplace/FullCard';
import { SearchBar } from '../../marketplace/SearchBar';

const data: IProductData[] = [
  {
    id: '1',
    title: 'Naranjas por kilo',
    price: 3000,
    img: 'https://www.65ymas.com/uploads/s1/23/51/17/naranjas-beneficios-contraindicaciones-y-recomendaciones-con-ellas.jpeg',
    stock: 100,
    ubication: 'Santiago'
  }
];
export const Detail = () => {
  return (
    <div>
      <div className="my-10">
        <SearchBar />
      </div>
      <div className="mx-20 my-10">
        {data.map(product => (
          <FullCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};
