import { useUsers } from '../../../hooks/useUsers';
import { ProductCard }  from '../../ui/ProductCard';
import { SearchBar } from '../../ui/SearchBar';

const DashboardCI = () => {
  const { logout, user } = useUsers();

  return (
    <div className="">

      <div className="my-10">
        <SearchBar/>
      </div>

      <h2>Recomendados</h2>

      <div className="mx-20 my-10 grid gap-5 grid-cols-1 md:grid-cols-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>

    </div>
  );
};

export default DashboardCI;
