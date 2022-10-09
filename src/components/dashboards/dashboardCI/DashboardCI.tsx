import { useUsers } from '../../../hooks/useUsers';
import { IProductData } from '../../../interfaces/marketplace.interface';
import {
  ExtendedCard,
  Filters,
  FullCard,
  ProductCard,
  SearchBar
} from '../../marketplace';

const data: IProductData[] = [
  {
    id: '1',
    title: 'Naranjas por kilo',
    price: 3000,
    img: 'https://www.65ymas.com/uploads/s1/23/51/17/naranjas-beneficios-contraindicaciones-y-recomendaciones-con-ellas.jpeg',
    stock: 100
  }
];

const DashboardCI = () => {
  const { logout, user } = useUsers();

  return (
    <div className="">
      <div className="my-10">
        <SearchBar />
      </div>

      <h2>Recomendados</h2>

      <div className="mx-20 my-10 grid gap-5 grid-cols-1 md:grid-cols-5">
        {data.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      <div className="mx-20 my-10 grid gap-10 grid-cols-2">
        <div>
          {data.map(product => (
            <ExtendedCard key={product.id} {...product} />
          ))}
        </div>
        <Filters />
      </div>

      <div className="mx-20 my-10">
        {data.map(product => (
          <FullCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default DashboardCI;
