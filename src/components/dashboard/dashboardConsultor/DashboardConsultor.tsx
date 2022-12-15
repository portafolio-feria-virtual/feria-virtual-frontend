import Sidebar from '../../layout/Sidebar';
import { sidebarConsultor } from '../../utils/sidebarItems';
import { Outlet } from 'react-router-dom';

const DashboardConsultor = () => {
  return (
    <div className="flex">
      <Sidebar data={sidebarConsultor} />

      <div className="p-10 w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardConsultor;
