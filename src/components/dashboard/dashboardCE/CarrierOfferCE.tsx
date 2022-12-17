import { Badge } from '../../ui';
import { carrierOfferCE, carrierOfferHeaderCE } from '../../ui/utils';

const CarrierOfferCE = () => {
  return (
    <>
      <h3>Oferta de transportistas</h3>

      <table className="w-full max-w-7xl text-sm text-left text-gray-500 mt-2">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr className="text-left">
            {carrierOfferHeaderCE.map(header => (
              <th key={header} scope="col" className="py-3 px-6">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {carrierOfferCE.map((offer, index) => (
            <tr key={offer.id} className="bg-white border-b">
              <th scope="row" className="py-4 px-6 font-medium text-gray-900/50 whitespace-nowrap">
                {index + 1}
              </th>
              <td className="py-4 px-6">{offer.name}</td>
              <td className="py-4 px-6">{offer.description}</td>
              <td className="py-4 px-6">{offer.carrier}</td>
              <td className="py-4 px-6">{offer.capacity}</td>
              <td className="py-4 px-6">{<Badge status={offer.cooling} />}</td>
              <td className="py-4 px-6">{offer.postDate}</td>
              <td className="py-4 px-6">${offer.price.toLocaleString('es-CL')}</td>
              <td className="py-4 px-6">{<Badge status={offer.assigned} />}</td>
              <td className="py-4 px-6">{offer.accepted}</td>
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

export default CarrierOfferCE;
