import { useUsers } from '../../hooks/useUsers';

import DashboardCE from './dashboardCE/DashboardCE';
import DashboardCL from './dashboardCL/DashboardCL';
import DashboardPD from './dashboardPD/DashboardPD';
import DashboardTA from './dashboardTA/DashboardTA';

const Dashboard = () => {
  const { user, isAuth } = useUsers();

  return (
    <>
      {isAuth && (
        <>
          {user?.tipo_usuario === '0' && <DashboardCE />}
          {user?.tipo_usuario === '1' && <DashboardCL />}
          {user?.tipo_usuario === '2' && <DashboardPD />}
          {user?.tipo_usuario === '3' && <DashboardTA />}
        </>
      )}
    </>
  );
};

export default Dashboard;
