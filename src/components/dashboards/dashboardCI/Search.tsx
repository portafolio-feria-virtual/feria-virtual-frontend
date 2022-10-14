import { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import {
  IProductData,
  IUbicaciones
} from '../../../interfaces/marketplace.interface';
import { ExtendedCard } from '../../marketplace/ExtendedCard';
import { Filters } from '../../marketplace/Filters';
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

const ubicaciones: IUbicaciones[] = [
  {
    id: '1',
    name: 'Melipilla'
  },
  {
    id: '2',
    name: 'Santiago'
  }
];

interface IPriceProps {
  minPrice: number | string | null;
  maxPrice: number | string | null;
}

export const Search = () => {
  const [ubication, setUbication] = useState<string | null>('');

  //const [minPrice, setMinPrice] = useState<number | string>(0);

  //const [maxPrice, setMaxPrice] = useState<number | string>(999999999);

  const [filter, setFilter] = useState({
    ubication: '',
    minPrice: 0,
    maxPrice: 999999999
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {name, value} = e.target;
    setFilter({...filter, [name]: value});
  }

  const clearFilters = () => {
    setFilter({ubication: '', minPrice: 0, maxPrice: 999999999})
  };

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  // };

  return (
    <div>
      <div className="my-10">
        <SearchBar />
      </div>
      <div className="mx-20 my-10 grid gap-10 grid-cols-2">
        <div>
          {data
            .map(product => <ExtendedCard key={product.id} {...product} />)
            .filter(product => product.props.ubication.includes(ubication))
            .filter(product => product.props.price >= filter.minPrice)
            .filter(product => product.props.price <= filter.maxPrice)
            }
        </div>
        <div className="">
          <h2>Filtros</h2>

          <div className="flex gap-6">
            <h4>Ubicación</h4>
            <select
              id="Ubication"
              name="Ubication"
              className="w-full border rounded-lg"
              onChange={e => setUbication(e.target.value)}
              defaultValue="">
              <option value="" disabled>
                Seleccione una ubicación
              </option>
              {ubicaciones.map(ubic => (
                <option value={ubic.name}>{ubic.name}</option>
              ))}
            </select>
          </div>

          <div className="flex gap-6">
            <h4>Precio</h4>
            <div className="flex gap-6 w-full">
              <input
                id="minPrice"
                name="minPrice"
                type="number"
                className="w-full border rounded-lg"
                placeholder="Mínimo"
                min={0}
                max={999999999}
                onChange={handleChange}
              />
              <h4>-</h4>
              <input
                id="maxPrice"
                name="maxPrice"
                type="number"
                className="w-full border rounded-lg"
                placeholder="Máximo"
                min={0}
                max={999999999}
                onChange={handleChange}
              />
              {/* <button
                type="submit"
                className="rounded-full bg-gray-500 h-auto w-16">
                <IoIosArrowForward className="w-full fill-white" />
              </button> */}
            </div>
          </div>
          <div>
            <button
              className="rounded-lg bg-gray-500 text-white pl-2 pr-2" onClick={clearFilters}>
              Limpiar Filtros
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
