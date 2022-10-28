import { useUsers } from '../../../hooks/useUsers';
import { IProcessSale, IProductSale, ProcessStatus } from '../../../interfaces';
import Filters from './Filters';
import Licitation from './Licitation';

const status: ProcessStatus = 'Publicada';

const dataProductSale: IProductSale[] = [
  {
    id: '1',
    name: 'Naranjas',
    amount: 500
  }
];

const dataProcess: IProcessSale[] = [
  {
    id: '1',
    name: 'Feria gigante',
    description:
      'Se solicitan diferentes frutas para una feria gigante a realizar el proximo mes',
    country: 'Mexico',
    region: 'Oeste',
    city: 'Jalisco',
    street: 'No te enojes',
    postalCode: '844324784',
    productList: dataProductSale,
    maxAmount: 5000000,
    processStatus: status,
    initDate: '22/10/2022',
    closeDate: '04/11/2022'
  }
];

const DashboardPD = () => {
  const { logout, user } = useUsers();

  return (
    <div className="flex flex-col space-y-8 items-center justify-center h-screen">
      <h1>PANEL PRODUCTOR</h1>

      <h3>{`Bienvenido ${user?.first_name} ${user?.last_name} < Productor >`}</h3>

      <pre>
        <code>{JSON.stringify(user, null, 2)}</code>
      </pre>

      <div className=''>
        <Filters/>
      </div>

      <button onClick={() => logout()}>SALIR</button>
    </div>
  );
};

export default DashboardPD;
