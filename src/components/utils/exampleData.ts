import { ProductData, IUbications } from '../../interfaces';

export const data: ProductData[] = [
  {
    id: '1',
    title: 'Naranjas por kilo',
    price: 3000,
    image:
      'https://www.65ymas.com/uploads/s1/23/51/17/naranjas-beneficios-contraindicaciones-y-recomendaciones-con-ellas.jpeg',
    stock: 100,
    ubication: 'Santiago'
  },
  {
    id: '2',
    title: 'Saco de naranjas',
    price: 3500,
    image:
      'https://c8.alamy.com/compes/bmtxtj/sacos-de-naranjas-en-un-mercado-al-aire-libre-bmtxtj.jpg',
    stock: 20,
    ubication: 'Melipilla'
  },
  {
    id: '3',
    title: 'Kilo de manzanas',
    price: 5000,
    image: 'https://cdn.foodandwineespanol.com/2021/01/manzanas-licor-de-manzana.jpg',
    stock: 60,
    ubication: 'Melipilla'
  }
];

export const ubicaciones: IUbications[] = [
  {
    id: 1,
    name: 'Melipilla'
  },
  {
    id: 2,
    name: 'Santiago'
  }
];
