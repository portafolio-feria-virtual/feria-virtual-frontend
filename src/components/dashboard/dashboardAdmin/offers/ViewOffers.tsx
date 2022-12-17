import { Badge } from '../../../ui';
import { offerHeaderAdmin, offersAdmin } from '../../../ui/utils';

const ViewOffersAdmin = () => {
  return (
    <>
      <h2>Ver Ofertas</h2>
      <p>
        En esta sección podrás ver las <strong>Ofertas</strong> que se han realizado en la
        plataforma.
      </p>

      <div className="mt-10">
        <table className="w-full max-w-7xl text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr className="text-left">
              {offerHeaderAdmin.map(header => (
                <th key={header} scope="col" className="py-3 px-6">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {offersAdmin.map((offer, index) => (
              <tr key={offer.id} className="bg-white border-b whitespace-nowrap">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900/50 whitespace-nowrap">
                  {index + 1}
                </th>

                <td className="py-4 px-6">{offer.name}</td>
                <td className="py-4 px-6">{offer.offer}</td>
                <td className="py-4 px-6">{offer.description}</td>
                <td className="py-4 px-6">{offer.price}</td>
                <td className="py-4 px-6">{offer.files}</td>
                <td className="py-4 px-6">{offer.nameProducer}</td>
                <td className="py-4 px-6">{offer.status}</td>
                <td className="py-4 px-6">{<Badge status={offer.assigned} />}</td>
                <td className="py-4 px-6">{<Badge status={offer.editable} />}</td>
                <td className="py-4 px-6">{<Badge status={offer.closed} />}</td>
                <td className="py-4 px-6">{<Badge status={offer.confirmed} />}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ViewOffersAdmin;
