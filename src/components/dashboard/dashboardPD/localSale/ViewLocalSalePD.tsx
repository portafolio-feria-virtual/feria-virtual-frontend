import { Badge } from '../../../ui';
import EditLocalSalePD from './EditLocalSalePD';
import { localSalePDHeader, localSalePD } from '../../../ui/utils/index';

const ViewLocalSalePD = () => {
  return (
    <>
      <h2>Ver ventas locales</h2>

      <div className="overflow-x-auto max-w-7xl mt-10">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr className="text-left">
              {localSalePDHeader.map(header => (
                <th key={header} scope="col" className="py-3 px-6 whitespace-nowrap">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {localSalePD.map((localSale, index) => (
              <tr key={localSale.id} className="bg-white border-b whitespace-nowrap">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900/50 whitespace-nowrap">
                  {index + 1}
                </th>
                <td className="min-w-fit py-4 px-6">{localSale.title}</td>
                <td className="py-4 px-6">${localSale.price.toLocaleString('es-CL')}</td>
                <td className="py-4 px-6">{localSale.stock}</td>
                <td className="py-4 px-6">{localSale.ubication}</td>
                <td className="py-4 px-6">{<Badge status={localSale.image} />}</td>

                <td className="py-4 space-x-3">
                  <EditLocalSalePD
                    id={localSale.id}
                    title={localSale.title}
                    price={localSale.price}
                    stock={`${localSale.stock}`}
                  />
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

export default ViewLocalSalePD;
