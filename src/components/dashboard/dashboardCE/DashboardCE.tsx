import { AiFillHome } from 'react-icons/ai';
import { Outlet } from 'react-router-dom';
import { SidebarDataProps } from '../../../interfaces';
import Sidebar from '../../layout/Sidebar';

const dataCE: SidebarDataProps = {
  pageType: 'Usuarios',
  items: [
    {
      path: '/panel/usuario/hola',
      name: 'Inicio',
      icon: <AiFillHome className="w-6 h-6 text-inherit" />
    },
    {
      path: '/panel/usuario/chao',
      name: 'Inicio',
      icon: <AiFillHome className="w-6 h-6 text-inherit" />
    }
  ],
  userType: 'Cliente Extrajero'
};

const DashboardCE = () => {
  return (
    <div className="flex">
      {/* Enviar usuario */}
      <Sidebar data={dataCE} />

      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardCE;
