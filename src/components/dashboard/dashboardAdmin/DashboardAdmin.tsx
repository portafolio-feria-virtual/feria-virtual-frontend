import { Outlet } from 'react-router-dom';
import Sidebar from '../../layout/Sidebar';
import { sidebarAdmin } from '../../utils/sidebarItems';

const DashboardAdmin = () => {
  return (
    <div className="flex">
      <Sidebar data={sidebarAdmin} />

      <div className="p-10 w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardAdmin;
