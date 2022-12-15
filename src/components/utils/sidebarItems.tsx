import { AiFillHome, AiOutlineShoppingCart } from 'react-icons/ai';
import { SidebarDataProps } from '../../interfaces';

export const sidebarCE: SidebarDataProps = {
  pageType: 'Usuarios',
  items: [
    {
      path: '/panel/inicio',
      name: 'Inicio',
      icon: <AiFillHome className="w-6 h-6 text-inherit" />
    },
    {
      path: '/panel/licitaciones',
      name: 'Licitaciones',
      icon: <AiOutlineShoppingCart className="w-6 h-6 text-inherit" />
    },
    {
      path: '/panel/ver-envios',
      name: 'Ver envíos',
      icon: <AiOutlineShoppingCart className="w-6 h-6 text-inherit" />
    }
  ],
  userType: 'Cliente Extranjero'
};

export const sidebarCL: SidebarDataProps = {
  pageType: 'Usuarios',
  items: [
    {
      path: '/panel/ver-ofertas-de-compras',
      name: 'Ver ofertas de compras',
      icon: <AiOutlineShoppingCart className="w-6 h-6 text-inherit" />
    },
    {
      path: '/panel/crear-oferta',
      name: 'Crear oferta',
      icon: <AiOutlineShoppingCart className="w-6 h-6 text-inherit" />
    },
    {
      path: '/panel/marketplace',
      name: 'Marketplace',
      icon: <AiOutlineShoppingCart className="w-6 h-6 text-inherit" />
    }
  ],
  userType: 'Cliente Local'
};

export const sidebarPD: SidebarDataProps = {
  pageType: 'Usuarios',
  items: [
    {
      path: '/panel/crear-venta-local',
      name: 'Crear venta local',
      icon: <AiOutlineShoppingCart className="w-6 h-6 text-inherit" />
    },
    {
      path: '/panel/ver-ventas-locales',
      name: 'Ver ventas locales',
      icon: <AiOutlineShoppingCart className="w-6 h-6 text-inherit" />
    },
    {
      path: '/panel/ver-licitaciones',
      name: 'Ver licitaciones',
      icon: <AiOutlineShoppingCart className="w-6 h-6 text-inherit" />
    },
    {
      path: '/panel/ver-envios',
      name: 'Ver envíos',
      icon: <AiOutlineShoppingCart className="w-6 h-6 text-inherit" />
    }
  ],
  userType: 'Productor'
};

export const sidebarTA: SidebarDataProps = {
  pageType: 'Usuarios',
  items: [
    {
      path: '/panel/inicio',
      name: 'Inicio',
      icon: <AiFillHome className="w-6 h-6 text-inherit" />
    },
    {
      path: '/panel/ver-envio-transportista',
      name: 'Ver envíos',
      icon: <AiOutlineShoppingCart className="w-6 h-6 text-inherit" />
    },
    {
      path: '/panel/ver-postulaciones',
      name: 'Ver postulaciones',
      icon: <AiOutlineShoppingCart className="w-6 h-6 text-inherit" />
    },
    {
      path: '/panel/ver-licitaciones-transportista',
      name: 'Ver licitaciones',
      icon: <AiOutlineShoppingCart className="w-6 h-6 text-inherit" />
    }
  ],
  userType: 'Transportista'
};

export const sidebarAdmin: SidebarDataProps = {
  pageType: 'Administrador',
  items: [
    {
      path: '/panel/solicitudes',
      name: 'Solcitudes',
      icon: <AiOutlineShoppingCart className="w-6 h-6 text-inherit" />,
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
      icon: <AiOutlineShoppingCart className="w-6 h-6 text-inherit" />
    }
  ],
  userType: 'Administrador'
};

export const sidebarConsultor: SidebarDataProps = {
  pageType: 'Consultor',
  items: [
    {
      path: '/panel/generar-reportes',
      name: 'Generar reportes',
      icon: <AiOutlineShoppingCart className="w-6 h-6 text-inherit" />
    }
  ],
  userType: 'Consultor'
};
