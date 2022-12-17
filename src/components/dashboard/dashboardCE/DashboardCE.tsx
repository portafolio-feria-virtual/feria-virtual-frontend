import { Outlet } from 'react-router-dom';
import Sidebar from '../../layout/Sidebar';
import { sidebarCE } from '../../utils/sidebarItems';

const DashboardCE = () => {
  return (
    <div className="flex">
      {/* Enviar usuario */}
      <Sidebar data={sidebarCE} />

      <div className="p-10 w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardCE;
