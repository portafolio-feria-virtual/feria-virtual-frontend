import { Outlet } from 'react-router-dom';
import Sidebar from '../../layout/Sidebar';
import { sidebarPD } from '../../utils/sidebarItems';

const DashboardPD = () => {
  return (
    <div className="flex">
      <Sidebar data={sidebarPD} />

      <div className="p-10 w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardPD;
