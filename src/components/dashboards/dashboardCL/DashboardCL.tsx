import { useState } from 'react';
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

const DashboardCI = () => {
  const { logout, user } = useUsers();

  const [filterText, updateFilterText] = useState('all');

  function onFilterSelected(filterValue: any) {
    updateFilterText(filterValue);
  }

  console.log(filterText);

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
          {filterText === 'all'
            ? data.map(product => (
                <ExtendedCard key={product.id} {...product} />
              ))
            : data
                .map(product => <ExtendedCard key={product.id} {...product} />)
                .filter(ubication => ubication.props.ubication === filterText)}
        </div>
        <Filters filterSelected={onFilterSelected} />
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
