import { useUsers } from '../../../hooks/useUsers';
import Filters from './Filters';

const DashboardPD = () => {
  const { logout, user } = useUsers();

  return (
    <div className="flex flex-col space-y-8 items-center justify-center h-screen">
      <h1>PANEL PRODUCTOR</h1>

      <h3>{`Bienvenido ${user?.first_name} ${user?.last_name} < Productor >`}</h3>

      <pre>
        <code>{JSON.stringify(user, null, 2)}</code>
      </pre>

      <div className=''>
        <Filters/>
      </div>

      <button onClick={() => logout()}>SALIR</button>
    </div>
  );
};

export default DashboardPD;
