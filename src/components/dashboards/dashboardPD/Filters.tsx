import { IProcessSale, IProductSale, ProcessStatus } from '../../../interfaces';
import Licitation from './Licitation';

export default function Filters() {
  const status: ProcessStatus[] = [
    'Publicada',
    'Cerrada',
    'Adjudicada',
    'Cancelada',
    'Rechazada'
  ];

  const dataProductSale: IProductSale[] = [
    {
      id: '1',
      name: 'Naranjas',
      amount: 500
    },
    {
      id: '2',
      name: 'Peras',
      amount: 1000
    },
    {
      id: '3',
      name: 'Manzanas',
      amount: 200
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
      processStatus: 'Publicada',
      initDate: '22/10/2022',
      closeDate: '04/11/2022'
    }
  ];
  return (
    <div className="grid grid-flow-col gap-6">
      <div>
        {dataProcess.map(licit => (
          <Licitation key={licit.id} {...licit} />
        ))}
      </div>
      <div className="gap-6 border p-10">
        <h2>Filtros</h2>
        <h3>Estado</h3>
        <select name="" id="" className="border">
          <option value=""></option>
          {status.map(options => (
            <option key={options} value={options}>
              {options}
            </option>
          ))}
        </select>
        <div>
          <h3>Fecha Cierre</h3>
          <div className="flex">
            <input type="checkbox" name="" id="" />
            <p>Este mes</p>
          </div>
          <div className="flex">
            <input type="checkbox" name="" id="" />
            <p>Prox mes</p>
          </div>
          <div className="flex">
            <input type="checkbox" name="" id="" />
            <p>3 meses o más</p>
          </div>
        </div>
      </div>
      {/* <div>
      {dataProcess.map(licit => (
          <LicitationDetail key={licit.id} {...licit} />      // Es solo para revisar que esté correcta
        ))}
      </div> */}
    </div>
  );
}
