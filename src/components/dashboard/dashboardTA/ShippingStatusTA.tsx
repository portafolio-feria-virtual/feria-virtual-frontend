import { Badge } from '../../ui';
import { shippingHeaderTA, shippingsTA } from '../../ui/utils';
import UpdateStatusShipping from './UpdateStatusShipping';

const ShippingStatusTA = () => {
  return (
    <div>
      <h2>Estado de Envíos</h2>
      <p>En esta sección podrás ver el estado de los envíos a su cargo que se han realizado.</p>

      <div className="my-10">
        <h4 className="mb-2">Tipos de estado de envío</h4>
        <ul className="flex space-x-3">
          <li>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-2 rounded">
              Preparando envío
            </span>
          </li>
          <li>
            <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-2 rounded">
              Esperando Transporte
            </span>
          </li>
          <li>
            <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-2 rounded">
              Recibido en Transporte
            </span>
          </li>
          <li>
            <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-2 rounded">
              En camino
            </span>
          </li>
          <li>
            <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-2 rounded">
              Recibido en destino
            </span>
          </li>
        </ul>
      </div>

      <div>
        <table className="w-full max-w-7xl text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr className="text-left ">
              {shippingHeaderTA.map(header => (
                <th key={header} scope="col" className="py-3 px-6 whitespace-nowrap">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {shippingsTA.map((shipping, index) => (
              <tr key={shipping.id} className="bg-white border-b">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900/50 whitespace-nowrap">
                  {index + 1}
                </th>
                <td className="py-4 px-6">{shipping.bid}</td>
                <td className="py-4 px-6">{shipping.producerName}</td>
                <td className="py-4 px-6">{shipping.carrierName}</td>
                <td className="py-4 px-6">{<Badge status={shipping.editable} />}</td>
                <td className="py-4 px-6">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                    {shipping.status}
                  </span>
                </td>
                <td className="py-4 px-6">
                  {<UpdateStatusShipping id={shipping.id} status={shipping.editable} />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShippingStatusTA;
