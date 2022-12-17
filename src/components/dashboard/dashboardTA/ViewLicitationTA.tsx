import { Badge } from '../../ui';
import { licitationHeaderTA, licitationsTA } from '../../ui/utils';

const ViewLicitationTA = () => {
  return (
    <>
      <h2>Ver Licitaciones</h2>

      <p>En esta sección podrás ver las licitaciones para postular a envíos.</p>

      <div className="my-10">
        <h4 className="mb-2">Tipos de estado de licitación</h4>
        <ul className="flex space-x-3">
          <li>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-2 rounded">
              Publicada
            </span>
          </li>
          <li>
            <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-2 rounded">
              Asignada
            </span>
          </li>
          <li>
            <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-2 rounded">
              Cerrada
            </span>
          </li>
          <li>
            <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-2 rounded">
              Cancelada
            </span>
          </li>
          <li>
            <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-2 rounded">
              Rechazada
            </span>
          </li>
        </ul>
      </div>

      <div className="overflow-x-auto max-w-7xl mt-10">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr className="text-left">
              {licitationHeaderTA.map(header => (
                <th key={header} scope="col" className="py-3 px-6">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {licitationsTA.map((licitation, index) => (
              <tr key={licitation.id} className="bg-white border-b">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900/50 whitespace-nowrap">
                  {index + 1}
                </th>
                <td className="min-w-fit py-4 px-6">{licitation.internationalTrader}</td>
                <td className="py-4 px-6">{licitation.name}</td>
                <td className="py-4 px-6">{licitation.description}</td>
                <td className="py-4 px-6">{licitation.country}</td>
                <td className="py-4 px-6">{licitation.region}</td>
                <td className="py-4 px-6">{licitation.city}</td>
                <td className="py-4 px-6">{licitation.street}</td>
                <td className="py-4 px-6">{licitation.postalCode}</td>
                <td className="py-4 px-6">{licitation.productList.length}</td>
                <td className="py-4 px-6">${licitation.maxAmount.toLocaleString('es-CL')}</td>
                <td className="py-4 px-6">
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-2 rounded">
                    {licitation.processStatus}
                  </span>
                </td>
                <td className="py-4 px-6">{licitation.initDate}</td>
                <td className="py-4 px-6">{licitation.endDate}</td>
                <td className="py-4 px-6">{<Badge status={licitation.closed} />}</td>

                <td className="py-4">
                  <button className="bg-green-500 px-2 py-1 text-white rounded-md">
                    Crear oferta transporte
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ViewLicitationTA;
