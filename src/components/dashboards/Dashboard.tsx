import { useAuthContext } from '../../context/authContext';
import { useUsers } from '../../hooks/useUsers';

import DashboardCE from './dashboardCE/DashboardCE';
import DashboardCI from './dashboardCI/DashboardCI';
import DashboardPD from './dashboardPD/DashboardPD';
import DashboardTA from './dashboardTA/DashboardTA';
import { DashboardAdmin } from './dashboardAdmin/DashboardAdmin';
const Dashboard = () => {
  const { user, isAuth } = useUsers();
  //  switch (user?.tipo_usuario) {
  //    case '0':
  //      return <DashboardCE />;

  //    case '1':
  //      return <DashboardCI />;

  //    case '2':
  //      return <DashboardPD />;

  //    case '3':
  //      return <DashboardTA />;

  //    default:
  //      break;
  //  }

  return (
    <>
      {
        <DashboardAdmin/>
      /* {isAuth && (
        <>
          {user?.tipo_usuario === '0' && <DashboardCE />}
          {user?.tipo_usuario === '1' && <DashboardCI />}
          {user?.tipo_usuario === '2' && <DashboardPD />}
          {user?.tipo_usuario === '3' && <DashboardTA />}
        </>
      )} */}
    </>
  );
};

export default Dashboard;
