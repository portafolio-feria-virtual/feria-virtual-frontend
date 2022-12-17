import { shippingStatusPDHeader, shippingPD } from '../../../ui/utils/index';

const ViewShippingStatusPD = () => {
  return (
    <>
      <h2>Ver estado de envío</h2>

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
              {shippingStatusPDHeader.map(header => (
                <th key={header} scope="col" className="py-3 px-6 whitespace-nowrap">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {shippingPD.map((shipping, index) => (
              <tr key={shipping.id} className="bg-white border-b">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900/50 whitespace-nowrap">
                  {index + 1}
                </th>

                <td className="py-4 px-6">{shipping.title}</td>
                <td className="py-4 px-6">{shipping.price.toLocaleString('ex-CL')}</td>
                <td className="py-4 px-6">{shipping.productor}</td>
                <td className="py-4 px-6">{shipping.licitacion}</td>
                <td className="py-4 px-6">
                  <span className="bg-blue-100 text-blue-800">{shipping.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ViewShippingStatusPD;
