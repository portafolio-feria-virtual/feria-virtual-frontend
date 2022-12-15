import { Outlet } from 'react-router-dom';
import Sidebar from '../../layout/Sidebar';
import { sidebarTA } from '../../utils/sidebarItems';

const DashboardTA = () => {
  return (
    <div className="flex">
      <Sidebar data={sidebarTA} />

      <div className="p-10 w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardTA;
