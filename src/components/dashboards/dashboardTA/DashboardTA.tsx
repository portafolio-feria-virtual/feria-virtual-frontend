import { useUsers } from '../../../hooks/useUsers';

const DashboardTA = () => {
  const { logout, user } = useUsers();

  return (
    <div className="flex items-center justify-center h-screen">
      <h1>PANEL TRANSPORTISTA</h1>

      <h3>{`Bienvenido ${user?.first_name} ${user?.last_name} < Transportista >`}</h3>

      <pre>
        <code>{JSON.stringify(user, null, 2)}</code>
      </pre>

      <button onClick={() => logout()}>SALIR</button>
    </div>
  );
};

export default DashboardTA;
