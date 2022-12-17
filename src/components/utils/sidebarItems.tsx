import { AiOutlineShoppingCart } from 'react-icons/ai';
import { SidebarDataProps } from '../../interfaces';
import { MdOutlineLocalShipping, MdOutlinePostAdd, MdUpcoming } from 'react-icons/md';
import {
  IoMdAddCircleOutline,
  IoMdDocument,
  IoMdLocate,
  IoMdPaper,
  IoMdPricetags
} from 'react-icons/io';

export const sidebarCE: SidebarDataProps = {
  pageType: 'Usuarios',
  items: [
    {
      path: '/panel/licitaciones',
      name: 'Licitaciones',
      icon: <IoMdPaper className="w-6 h-6 text-inherit" />,
      subItems: [
        {
          path: '/panel/licitaciones/ver-licitaciones',
          name: 'Ver licitaciones'
        },
        {
          path: '/panel/licitaciones/crear-licitacion',
          name: 'Crear licitación'
        }
      ]
    },
    {
      path: '/panel/ver-envios',
      name: 'Ver envíos',
      icon: <MdOutlineLocalShipping className="w-6 h-6 text-inherit" />
    }
  ],
  userType: 'Cliente Extranjero',
  userName: 'Juan Perez'
};

export const sidebarCL: SidebarDataProps = {
  pageType: 'Usuarios',
  items: [
    {
      path: '/panel/ver-ofertas-de-compras',
      name: 'Ver ofertas',
      icon: <IoMdPricetags className="w-6 h-6 text-inherit" />
    },
    {
      path: '/panel/crear-oferta',
      name: 'Crear oferta',
      icon: <IoMdAddCircleOutline className="w-6 h-6 text-inherit" />
    },
    {
      path: '/panel/marketplace',
      name: 'Marketplace',
      icon: <AiOutlineShoppingCart className="w-6 h-6 text-inherit" />
    }
  ],
  userType: 'Cliente Local',
  userName: 'Esteba Armijo'
};

export const sidebarPD: SidebarDataProps = {
  pageType: 'Usuarios',
  items: [
    {
      path: '/panel/ventas-locales',
      name: 'Ventas locales',
      icon: <IoMdLocate className="w-6 h-6 text-inherit" />,
      subItems: [
        {
          path: '/panel/ventas-locales/crear-venta-local',
          name: 'Crear venta local'
        },
        {
          path: '/panel/ventas-locales/ver-ventas-locales',
          name: 'Ver ventas locales'
        }
      ]
    },
    {
      path: '/panel/ver-envios-productor',
      name: 'Ver estado envíos',
      icon: <MdOutlineLocalShipping className="w-6 h-6 text-inherit" />
    },
    {
      path: '/panel/licitaciones-productor',
      name: 'Licitaciones',
      icon: <IoMdPaper className="w-6 h-6 text-inherit" />,
      subItems: [
        {
          path: '/panel/licitaciones-productor/crear-oferta-productor',
          name: 'Crear oferta'
        },
        {
          path: '/panel/licitaciones-productor/ver-ofertas-licitacion',
          name: 'Ver ofertas de licitación'
        }
      ]
    }
  ],
  userType: 'Productor',
  userName: 'Francisco Hernandez'
};

export const sidebarTA: SidebarDataProps = {
  pageType: 'Usuarios',
  items: [
    {
      path: '/panel/ver-envio-transportista',
      name: 'Ver envíos',
      icon: <MdOutlineLocalShipping className="w-6 h-6 text-inherit" />
    },
    {
      path: '/panel/ver-postulaciones',
      name: 'Ver postulaciones',
      icon: <MdOutlinePostAdd className="w-6 h-6 text-inherit" />
    },
    {
      path: '/panel/ver-licitaciones-transportista',
      name: 'Ver licitaciones',
      icon: <IoMdPaper className="w-6 h-6 text-inherit" />
    }
  ],
  userType: 'Transportista',
  userName: 'Camila Gonzalez'
};

export const sidebarAdmin: SidebarDataProps = {
  pageType: 'Administrador',
  items: [
    {
      path: '/panel/solicitudes',
      name: 'Solcitudes',
      icon: <MdUpcoming className="w-6 h-6 text-inherit" />,
      subItems: [
        {
          path: '/panel/solicitudes/ver-licitaciones-admin',
          name: 'Ver licitaciones'
        },
        {
          path: '/panel/solicitudes/ver-ofertas-admin',
          name: 'Ver ofertas de compras'
        },
        {
          path: '/panel/solicitudes/ver-ventas-locales-admin',
          name: 'Ver ventas locales'
        }
      ]
    },
    {
      path: '/panel/contratos',
      name: 'Contratos',
      icon: <IoMdDocument className="w-6 h-6 text-inherit" />
    }
  ],
  userType: 'Administrador',
  userName: 'Fernando Gomez'
};

export const sidebarConsultor: SidebarDataProps = {
  pageType: 'Consultor',
  items: [
    {
      path: '/panel/generar-reportes',
      name: 'Generar reportes',
      icon: <IoMdAddCircleOutline className="w-6 h-6 text-inherit" />
    }
  ],
  userType: 'Consultor',
  userName: 'Antonio Cerda'
};
