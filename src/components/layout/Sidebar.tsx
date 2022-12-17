import { AiOutlinePoweroff } from 'react-icons/ai';
import { SidebarProps } from '../../interfaces';
import { Avatar, NavLink } from '../ui';
import logo from '../../assets/images/logo.svg';
import { useState } from 'react';
import { Modal } from '../ui';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ data }: SidebarProps) => {
  return (
    <aside className="w-96 h-screen" aria-label="Sidebar">
      <div className="h-full py-4 px-3 bg-zinc-100">
        <div className="flex flex-col mt-auto h-full">
          <div className="py-4 px-3">
            <div className="flex items-center">
              <img src={logo} alt="Logo" className="w-14" />

              <div className="flex flex-col ml-3">
                <span className="text-lg font-medium text-slate-800">
                  <strong>Maipo</strong> Grande
                </span>
                <span className="text-sm">{data.pageType}</span>
              </div>
            </div>
          </div>
          <div className="overflow-y-auto pr-4">
            <ul className="space-y-2 pt-4 border-t border-slate-200">
              {data.items.map(item => (
                <div key={item.path}>
                  <NavLink to={item.path}>
                    <div className="flex items-center p-3 text-base font-normal text-slate-800 hover:text-white rounded-lg hover:bg-green-500">
                      {item.icon}
                      <span className="ml-3 font-medium">{item.name}</span>
                    </div>
                  </NavLink>

                  {item.subItems && (
                    <ul className={`space-y-2 pl-8`}>
                      {item.subItems.map(subItem => (
                        <NavLink key={subItem.path} type="item" to={subItem.path}>
                          <div className="flex items-center p-3 text-base font-normal text-slate-800 hover:text-green-500 rounded-lg">
                            {subItem.name}
                          </div>
                        </NavLink>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </ul>
          </div>

          <div className="mt-auto px-3 pb-3 pt-6 border-t border-slate-200">
            <div className="flex items-center">
              <Avatar seed="John Doe" />

              <div className="flex flex-col pl-4">
                <span className="text-sm font-medium text-slate-900">{data.userName}</span>
                <span className="text-sm">{data.userType}</span>
              </div>

              <div className="ml-auto">
                <SidebarLogout />
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

const SidebarLogout = () => {
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/ingreso');
    setOpen(false);
  };

  const handleOpen = () => setOpen(true);

  return (
    <>
      <AiOutlinePoweroff
        onClick={handleOpen}
        size={20}
        className="cursor-pointer hover:text-slate-800"
      />

      <Modal isOpen={open} onRequestClose={handleClose}>
        <div className="flex flex-col items-center justify-center space-y-4">
          <h2 className="text-lg font-medium text-slate-900">¿Estás seguro de cerrar sesión?</h2>
          <div className="flex space-x-4">
            <button
              className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600"
              onClick={handleClose}>
              Si
            </button>
            <button
              className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600"
              onClick={handleClose}>
              No
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};
