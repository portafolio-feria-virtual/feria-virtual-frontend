import { Badge } from '../../../ui';
import { localSaleHeaderAdmin, localSalesAdmin } from '../../../ui/utils';

const ViewLocalSalesAdmin = () => {
  return (
    <>
      <h2>Ver Ventas Locales</h2>
      <p>
        En esta sección podrás ver las <strong>Ventas Locales</strong> que se han realizado en la
        plataforma.
      </p>

      <div className="mt-10">
        <table className="w-full max-w-7xl text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr className="text-left">
              {localSaleHeaderAdmin.map(header => (
                <th key={header} scope="col" className="py-3 px-6">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {localSalesAdmin.map((localSale, index) => (
              <tr key={localSale.id} className="bg-white border-b whitespace-nowrap">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900/50 whitespace-nowrap">
                  {index + 1}
                </th>
                <td className="py-4 px-6 ">{localSale.name}</td>
                <td className="py-4 px-6 ">${localSale.price.toLocaleString('es-CL')}</td>
                <td className="py-4 px-6 ">{localSale.stock}</td>
                <td className="py-4 px-6 ">{localSale.location}</td>
                <td className="py-4 px-6 ">{localSale.nameProducer}</td>
                <td className="py-4 px-6 ">{localSale.status}</td>
                <td className="py-4 px-6 ">{<Badge status={localSale.sold} />}</td>
                <td className="py-4 px-6 ">{localSale.published}</td>
                <td className="py-4 px-6 ">{<Badge status={localSale.closed} />}</td>
                <td className="py-4 px-6 ">{<Badge status={localSale.editable} />}</td>
                <td className="py-4 px-6 ">{<Badge status={localSale.confirmed} />}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ViewLocalSalesAdmin;
