import { useUsers } from '../../../hooks/useUsers';
import SearchBar from '../../ui/SearchBar';

const DashboardCI = () => {
  const { logout, user } = useUsers();

  return (
    <div className="">

      <div>
        <SearchBar/>
      </div>

      <h2>Recomendados</h2>

      <div>
        
      </div>

    </div>
  );
};

export default DashboardCI;
