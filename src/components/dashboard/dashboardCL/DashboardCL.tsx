import { Outlet } from 'react-router-dom';
import Sidebar from '../../layout/Sidebar';
import { sidebarCL } from '../../utils/sidebarItems';

const DashboardCL = () => {
  return (
    <div className="flex">
      <Sidebar data={sidebarCL} />

      <div className="p-10 w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardCL;
