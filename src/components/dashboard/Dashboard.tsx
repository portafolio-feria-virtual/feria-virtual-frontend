import { useAuth } from '../../hooks';
import { UserType } from '../../interfaces';
import { ContractTable } from './dashboardAdmin/contract/ContractTable';
import ViewContract from './dashboardAdmin/contract/ViewContract';
import DashboardCE from './dashboardCE/DashboardCE';
import ContractEditForm from './dashboardAdmin/contract/ContractEditForm';
import ContractForm from './dashboardAdmin/contract/ContractForm';

import ProcessSaleForm from './dashboardCE/ProcessSaleForm';
import Sidebar from '../layout/Sidebar';
import { sidebarAdmin, sidebarCE, sidebarCL, sidebarConsultor } from '../utils/sidebarItems';
import DashboardConsultor from './dashboardConsultor/DashboardConsultor';
import DashboardTA from './dashboardTA/DashboardTA';
import DashboardAdmin from './dashboardAdmin/DashboardAdmin';
import DashboardCL from './dashboardCL/DashboardCL';
import { Toaster } from 'react-hot-toast';
import DashboardPD from './dashboardPD/DashboardPD';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <>
      {/* <ProcessSaleForm /> */}

      <DashboardPD />

      {/* {user && (
        <>
          {user.type === UserType.CLIENTE_EXTRANJERO && <DashboardCE />}
          {user.type === UserType.CLIENTE_LOCAL && <DashboardCL />}
        </>
      )} */}

      <Toaster position="top-right" />
    </>
  );
};

export default Dashboard;