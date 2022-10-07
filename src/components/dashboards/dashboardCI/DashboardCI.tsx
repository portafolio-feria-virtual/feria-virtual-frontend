import { useUsers } from '../../../hooks/useUsers';
import { ExtendedCard, Filters, FullCard, ProductCard, ProductDetail, SearchBar, SellerDetail } from '../../marketplace';

const data = {
  title: "Naranjas por kilo",
  price: 3000,
  img: "https://www.65ymas.com/uploads/s1/23/51/17/naranjas-beneficios-contraindicaciones-y-recomendaciones-con-ellas.jpeg",
  stock: 100
}


const DashboardCI = () => {
  const { logout, user } = useUsers();

  return (
    <div className="">

      <div className="my-10">
        <SearchBar/>
      </div>

      <h2>Recomendados</h2>

      <div className="mx-20 my-10 grid gap-5 grid-cols-1 md:grid-cols-5">
        <ProductCard productData={data}/>
        <ProductCard productData={data}/>
        <ProductCard productData={data}/>
        <ProductCard productData={data}/>
        <ProductCard productData={data}/>
      </div>

      <div className="mx-20 my-10 grid gap-10 grid-cols-2">
        <div>
          <ExtendedCard productData={data}/>
          <ExtendedCard productData={data}/>
          <ExtendedCard productData={data}/>
        </div>
        <Filters />
      </div>

      <div className="mx-20 my-10">
        <FullCard productData={data}/>
        <ProductDetail />
        <SellerDetail />
      </div>

    </div>
  );
};

export default DashboardCI;
