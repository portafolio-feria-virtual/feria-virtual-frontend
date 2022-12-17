import { Badge } from '../../ui';
import { offerHeaderCE, offersCE } from '../../ui/utils';

const ProducerOfferCE = () => {
  return (
    <>
      <h3>Oferta de productores</h3>

      <table className="w-full text-sm text-left text-gray-500 mt-2">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr className="text-left">
            {offerHeaderCE.map(header => (
              <th key={header} scope="col" className="py-3 px-6">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {offersCE.map((offer, index) => (
            <tr key={offer.id} className="bg-white border-b whitespace-nowrap">
              <th scope="row" className="py-4 px-6 font-medium text-gray-900/50 whitespace-nowrap">
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

              <td className="py-4 px-6">
                <button className="bg-green-500 rounded-md py-2 px-3 block text-white">
                  Aceptar
                </button>
                <button className="bg-red-500 rounded-md py-2 px-3 text-white mt-2">
                  Declinar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ProducerOfferCE;
