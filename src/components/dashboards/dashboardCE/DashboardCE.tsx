import { useUsers } from '../../../hooks/useUsers';

const
  DashboardCE = () => {
  const { logout, user } = useUsers();

  console.log(user);

  return (
    <div className="flex flex-col space-y-8 items-center justify-center h-screen">
      <h1>PANEL CLIENTE EXTERNO</h1>

      {/* <h3>{`Bienvenido ${user?.first_name} ${user?.last_name} < Cliente Externo >`}</h3> */}

      <pre>
        <code>{JSON.stringify(user, null, 2)}</code>
      </pre>

      <button onClick={() => logout()}>SALIR</button>
    </div>
  );
};

export default DashboardCE;
