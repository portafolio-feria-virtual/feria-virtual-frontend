import { useUsers } from '../../hooks/useUsers';

import DashboardCE from './dashboardCE/DashboardCE';
import DashboardCL from './dashboardCL/DashboardCL';
import DashboardPD from './dashboardPD/DashboardPD';
import DashboardTA from './dashboardTA/DashboardTA';
import { UserTypes } from '../../interfaces/auth.interface';

const Dashboard = () => {
  const { user, isAuth } = useUsers();

  return (
    <>
      {isAuth && user && (
        <>
          {user?.type === UserTypes.CLIENTE_EXTRANJERO && <DashboardCE />}
          {user?.type === UserTypes.CLIENTE_LOCAL && <DashboardCL />}
          {user?.type === UserTypes.PRODUCTOR && <DashboardPD />}
          {user?.type === UserTypes.TRANSPORTISTA && <DashboardTA />}
        </>
      )}
    </>
  );
};

export default Dashboard;
