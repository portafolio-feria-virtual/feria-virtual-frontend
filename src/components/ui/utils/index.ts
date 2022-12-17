import { ExternalSale, IContract, IUbications, ProductData } from '../../../interfaces';

export const products: ProductData[] = [
  {
    id: '1',
    title: 'Producto 1',
    price: 1020,
    image:
      'https://www.65ymas.com/uploads/s1/23/51/17/naranjas-beneficios-contraindicaciones-y-recomendaciones-con-ellas.jpeg',
    stock: 100,
    ubication: 'Melipilla'
  },
  {
    id: '2',
    title: 'Producto 2',
    price: 5000,
    image:
      'https://c8.alamy.com/compes/bmtxtj/sacos-de-naranjas-en-un-mercado-al-aire-libre-bmtxtj.jpg',
    stock: 100,
    ubication: 'Melipilla'
  },
  {
    id: '3',
    title: 'Producto 3',
    price: 1500,
    image:
      'https://c8.alamy.com/compes/bmtxtj/sacos-de-naranjas-en-un-mercado-al-aire-libre-bmtxtj.jpg',
    stock: 30,
    ubication: 'Melipilla'
  }
];

export const ubicaciones: IUbications[] = [
  {
    id: 1,
    name: 'Melipilla'
  },
  {
    id: 2,
    name: 'Santiago'
  }
];

export const shippingHeaderTA = [
  'N°',
  'Oferta',
  'Nombre Productor',
  'Nombre Transportista',
  'Editable',
  'Estado',
  'Acciones'
];

export const shippingsTA = [
  {
    id: '1',
    bid: 'Envío 1',
    producerName: 'Productor 1',
    carrierName: 'Transportista 1',
    editable: true,
    status: 'Preparando envío'
  },
  {
    id: '2',
    bid: 'Envío 1',
    producerName: 'Productor 1',
    carrierName: 'Transportista 1',
    editable: false,
    status: 'Preparando envío'
  }
];

export const postulationHeaderTA = [
  'N°',
  'Nombre',
  'Descripción',
  'Transportista',
  'Capacidad',
  'Refrigeración',
  'Creación',
  'Precio',
  'Asignado',
  'Aceptado',
  'Cerrado',
  'Confirmado',
  'Editable',
  'Acciones',
  'Asignación'
];

export const postulationsTA = [
  {
    id: '1',
    name: 'Envío 1',
    description: 'Envío 1',
    carrier: 'Transportista 1',
    capacity: '1000 kg',
    cooling: true,
    postDate: '2021-05-01',
    price: 1000,
    assigned: false,
    accepted: 'En espera',
    closed: false,
    editable: true,
    confirmed: false
  },
  {
    id: '2',
    name: 'Envío 2',
    description: 'Envío 2',
    carrier: 'Transportista 2',
    capacity: '1000 kg',
    cooling: false,
    postDate: '2021-05-01',
    price: 2000,
    assigned: false,
    accepted: 'En espera',
    closed: false,
    editable: true,
    confirmed: false
  }
];

export const licitationHeaderTA = [
  'N°',
  'Nombre cliente',
  'Nombre',
  'Descripción',
  'País',
  'Región',
  'Ciudad',
  'Calle',
  'Código postal',
  'Lista de productos',
  'Monto máximo',
  'Estado',
  'Fecha de creación',
  'Fecha de cierre',
  'Cerrado',
  'Acciones'
];

export const licitationsTA = [
  {
    id: '1',
    internationalTrader: 'Cliente 1',
    name: 'Envío 1',
    description: 'Envío 1',
    country: 'Chile',
    region: 'Región 1',
    city: 'Santiago',
    street: 'Calle 1',
    postalCode: '123456',
    productList: ['Producto 1', 'Producto 2'],
    maxAmount: 1000,
    processStatus: 'Publicado',
    initDate: '2021-05-01',
    endDate: '2021-06-01',
    closed: false,
    editable: true
  }
];

export const reportHeaderCON = ['#', 'Nombre', 'Descripción', 'Fecha de creación', 'Acciones'];

export const saleReportCON = [
  {
    id: '1',
    name: 'Reporte 1',
    description: 'Reporte de ventas',
    createdAt: '2021-05-01'
  },
  {
    id: '2',
    name: 'Reporte 2',
    description: 'Reporte de ventas',
    createdAt: '2021-05-01'
  }
];

export const lossReportCON = [
  {
    id: '1',
    name: 'Reporte 1',
    description: 'Reporte de perdida',
    createdAt: '2021-05-01'
  },
  {
    id: '2',
    name: 'Reporte 2',
    description: 'Reporte de perdida',
    createdAt: '2021-05-01'
  }
];

export const offerHeaderCL = [
  'N',
  'Nombre Oferta',
  'Nombre Comerciante',
  'Estado',
  'Fecha oferta',
  'Cantidad',
  'Editable',
  'Confirmado',
  'Acciones'
];

export const offersCL = [
  {
    id: 1,
    localSale: 'Oferta 1',
    localTrader: 'Comerciante 1',
    status: 'Publicada',
    orderDate: '2021-05-01',
    quantity: 10,
    editable: true,
    confirmed: false
  }
];

export const carrierOfferHeaderCE = [
  'N°',
  'Nombre',
  'Descripción',
  'Transportista',
  'Capacidad',
  'Refrigeración',
  'Creación',
  'Precio',
  'Asignado',
  'Aceptado',
  'Cerrado',
  'Confirmado',
  'Acciones'
];

export const carrierOfferCE = [
  {
    id: '1',
    name: 'Envío 1',
    description: 'Envío 1',
    carrier: 'Transportista 1',
    capacity: '1000 kg',
    cooling: true,
    postDate: '2021-05-01',
    price: 1000,
    assigned: false,
    accepted: 'En espera',
    closed: false,
    confirmed: false
  }
];

export const offerHeaderCE = [
  'N°',
  'Nombre',
  'Oferta',
  'Descripción',
  'Precio',
  'Archivos',
  'Productor',
  'Estado',
  'Asignada',
  'Editable',
  'Cerrado',
  'Confirmado',
  'Acciones'
];

export const offersCE = [
  {
    id: 1,
    name: 'Venta 1',
    offer: 'Oferta 1',
    description: 'Descripción 1',
    price: 1000,
    files: 'Archivos 1',
    nameProducer: 'Productor 1',
    status: 'En espera',
    assigned: false,
    editable: true,
    closed: false,
    confirmed: false
  }
];

export const shippingHeaderCE = [
  'N°',
  'Oferta',
  'Nombre Productor',
  'Nombre Transportista',
  'Estado'
];

export const shippingsCE = [
  {
    id: '1',
    bid: 'Envío 1',
    producerName: 'Productor 1',
    carrierName: 'Transportista 1',
    status: 'Preparando envío'
  },
  {
    id: '2',
    bid: 'Envío 1',
    producerName: 'Productor 2',
    carrierName: 'Transportista 2',
    status: 'Preparando envío'
  }
];

export const licitationHeaderCE = [
  'N°',
  'Nombre cliente',
  'Nombre licitación',
  'Descripción',
  'País',
  'Región',
  'Ciudad',
  'Calle',
  'Código postal',
  'Lista de productos',
  'Monto máximo',
  'Estado',
  'Fecha de creación',
  'Fecha de cierre',
  'Cerrado',
  'Acciones'
];

export const licitationsCE = [
  {
    id: '1',
    internationalTrader: 'Carlos Muñoz',
    name: 'Licitación 1',
    description: 'Licitación 1',
    country: 'España',
    region: 'Región 1',
    city: 'Madrid',
    street: 'Calle 1',
    postalCode: '123456',
    productList: ['Producto 1', 'Producto 2'],
    maxAmount: 1000,
    processStatus: 'Publicado',
    initDate: '2021-05-01',
    endDate: '2021-06-01',
    closed: false,
    editable: true
  }
];

export const viewContractHeader = [
  'Id contrato',
  'Empresa',
  'Fecha Inicio',
  'Fecha Modificación',
  'Fecha Término',
  'Acciones'
];

export const data: IContract[] = [
  {
    id: 'AABB00',
    companyName: 'Ariztia',
    initDate: '26/10/2021',
    modifyDate: '27/11/2021',
    endDate: '25/12/2021'
  },
  {
    id: 'BBAA00',
    companyName: 'Santa Isabel',
    initDate: '27/10/2021',
    modifyDate: '28/11/2021',
    endDate: '26/12/2021'
  }
];

export const licitationHeaderAdmin = ['N°', 'Nombre', 'Descripción', 'Monto', 'Archivo'];

export const licitationsAdmin: ExternalSale[] = [
  {
    id: '1',
    name: 'Licitación 1',
    description: 'Licitación 1',
    amount: 1000000,
    fileName: true
  },
  {
    id: '2',
    name: 'Licitación 1',
    description: 'Licitación 1',
    amount: 1000000,
    fileName: false
  }
];

export const localSaleHeaderAdmin = [
  'N°',
  'Nombre',
  'Precio',
  'Stock',
  'Ubicación',
  'Productor',
  'Estado',
  'Vendido',
  'Publicada',
  'Cerrado',
  'Editable',
  'Confirmado',
  'Acciones'
];

export const localSalesAdmin = [
  {
    id: 1,
    name: 'Venta 1',
    price: 1000,
    stock: 10,
    location: 'Santiago',
    nameProducer: 'Productor 1',
    status: 'Publicada',
    sold: false,
    published: '2021-05-01',
    closed: false,
    editable: true,
    confirmed: false
  },
  {
    id: 2,
    name: 'Venta 1',
    price: 1000,
    stock: 10,
    location: 'Santiago',
    nameProducer: 'Productor 1',
    status: 'Publicada',
    sold: false,
    published: '2021-05-01',
    closed: false,
    editable: true,
    confirmed: false
  },
  {
    id: 2,
    name: 'Venta 1',
    price: 1000,
    stock: 10,
    location: 'Santiago',
    nameProducer: 'Productor 1',
    status: 'Cerrada',
    sold: true,
    published: '2021-05-01',
    closed: true,
    editable: true,
    confirmed: false
  }
];

export const offerHeaderAdmin = [
  'N°',
  'Nombre',
  'Oferta',
  'Descripción',
  'Precio',
  'Archivos',
  'Productor',
  'Estado',
  'Asignada',
  'Editable',
  'Cerrado',
  'Confirmado',
  'Acciones'
];

export const offersAdmin = [
  {
    id: 1,
    name: 'Venta 1',
    offer: 'Oferta 1',
    description: 'Descripción 1',
    price: 1000,
    files: 'Archivos 1',
    nameProducer: 'Productor 1',
    status: 'En espera',
    assigned: false,
    editable: true,
    closed: false,
    confirmed: false
  }
];

export const localSalePDHeader = [
  'N°',
  'Titulo',
  'Precio',
  'Stock',
  'Ubicación',
  'Imágenes',
  'Acciones'
];

export const localSalePD = [
  {
    id: 1,
    title: 'Producto 1',
    price: 10000,
    stock: 10,
    ubication: 'Santiago, Chile',
    image: true
  },
  {
    id: 2,
    title: 'Producto 2',
    price: 20000,
    stock: 20,
    ubication: 'Santiago, Chile',
    image: false
  }
];

export const shippingStatusPDHeader = [
  'N°',
  'Titulo',
  'Precio',
  'Productor',
  'Licitación',
  'Estado'
];

export const shippingPD = [
  {
    id: 1,
    title: 'Producto 1',
    price: 10000,
    productor: 'Productor 1',
    licitacion: 'Licitación 1',
    status: 'Preparando envío'
  }
];

export const licitationPDHeader = [
  'N°',
  'Productor',
  'Licitación',
  'Nombre',
  'Descripción',
  'Valor',
  'Archivos',
  'Acciones'
];

export const licitationPD = [
  {
    id: 1,
    productor: 'Productor 1',
    licitation: 'Licitación 1',
    name: 'Nombre 1',
    description: 'Descripción 1',
    value: 1000000,
    fileName: true
  }
];