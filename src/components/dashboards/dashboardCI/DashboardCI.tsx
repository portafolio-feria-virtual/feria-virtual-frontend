import { useUsers } from '../../../hooks/useUsers';

const DashboardCI = () => {
  const { logout, user } = useUsers();

  return (
    <div className="flex flex-col space-y-8 items-center justify-center h-screen">
      <h1>PANEL CLIENTE INTERNO</h1>

      <h3>{`Bienvenido ${user?.first_name} ${user?.last_name} < Cliente Interno >`}</h3>

      <pre>
        <code>{JSON.stringify(user, null, 2)}</code>
      </pre>

      <button onClick={() => logout()}>SALIR</button>
    </div>
  );
};

export default DashboardCI;
