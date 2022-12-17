import { Badge } from '../../ui';
import { offerHeaderCL, offersCL } from '../../ui/utils';

const ViewOffers = () => {
  return (
    <div>
      <h2>Ver mis ofertas</h2>
      <p>
        En esta sección podrás ver las <strong>Ofertas</strong> que has creado en la plataforma.
      </p>

      <div className="my-10">
        <h4 className="mb-2">Tipos de estado de la oferta</h4>
        <ul className="flex space-x-3">
          <li>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-2 rounded">
              Publicada
            </span>
          </li>
          <li>
            <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-2 rounded">
              En espera
            </span>
          </li>
          <li>
            <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-2 rounded">
              Aceptada
            </span>
          </li>
          <li>
            <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-2 rounded">
              Finalizada
            </span>
          </li>
          <li>
            <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-2 rounded">
              Rechazada
            </span>
          </li>
        </ul>
      </div>

      <div className="mt-10">
        <table className="w-full max-w-7xl text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr className="text-left">
              {offerHeaderCL.map(header => (
                <th key={header} scope="col" className="py-3 px-6">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {offersCL.map((offer, index) => (
              <tr key={offer.id} className="bg-white border-b">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900/50 whitespace-nowrap">
                  {index + 1}
                </th>

                <td className="py-4 px-6">{offer.localSale}</td>
                <td className="py-4 px-6">{offer.localTrader}</td>
                <td className="py-4 px-6">
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-2 rounded">
                    {offer.status}
                  </span>
                </td>
                <td className="py-4 px-6">{offer.orderDate}</td>
                <td className="py-4 px-6">{offer.quantity}</td>
                <td className="py-4 px-6">{<Badge status={offer.editable} />}</td>
                <td className="py-4 px-6">{<Badge status={offer.confirmed} />}</td>

                <td className="py-4 px-6 space-y-2">
                  <button className="block w-full bg-green-500 px-2 py-1 text-white rounded-md">
                    Aceptar
                  </button>
                  <button className="block w-full bg-yellow-500 px-2 py-1 text-white rounded-md">
                    Editar
                  </button>
                  <button className="block w-full bg-red-500 px-2 py-1 text-white rounded-md">
                    Cerrar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewOffers;
