import { Badge } from '../../../ui/Badge';
import { licitationPDHeader, licitationPD } from '../../../ui/utils/index';

const ViewLicitationOfferPD = () => {
  return (
    <>
      <h2>Ver ofertas de licitación</h2>

      <div className="overflow-x-auto max-w-7xl mt-10">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr className="text-left">
              {licitationPDHeader.map(header => (
                <th key={header} scope="col" className="py-3 px-6 whitespace-nowrap">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {licitationPD.map((licitation, index) => (
              <tr key={licitation.id} className="bg-white border-b whitespace-nowrap">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900/50 whitespace-nowrap">
                  {index + 1}
                </th>
                <td className="min-w-fit py-4 px-6">{licitation.productor}</td>
                <td className="py-4 px-6">{licitation.licitation}</td>
                <td className="py-4 px-6">{licitation.name}</td>
                <td className="py-4 px-6">{licitation.description}</td>
                <td className="py-4 px-6">${licitation.value.toLocaleString('es-CL')}</td>
                <td className="py-4 px-6">{<Badge status={licitation.fileName} />}</td>

                <td className="py-4 px-6">
                  <button className="bg-red-500 px-2 py-1 text-white rounded-md">Cerrar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ViewLicitationOfferPD;
