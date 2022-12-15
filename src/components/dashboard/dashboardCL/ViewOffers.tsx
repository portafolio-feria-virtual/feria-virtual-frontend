const offerHeader = [''];

const offers = [''];

const ViewOffers = () => {
  return (
    <div>
      <h2>Ver mis ofertas creadas</h2>
      <p>
        En esta sección podrás ver las <strong>Ofertas</strong> que has creado en la plataforma.
      </p>

      <div className="mt-10">
        <table className="w-full max-w-7xl text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr className="text-left">
              {offerHeader.map(header => (
                <th key={header} scope="col" className="py-3 px-6">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* {offers.map((offer, index) => (
              <tr key={offer.id} className="bg-white border-b">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900/50 whitespace-nowrap">
                  {index + 1}
                </th>
                <td className="py-4 px-6">{offer.name}</td>
                <td className="py-4 px-6">{offer.description}</td>
                <td className="py-4 px-6">{offer.to}</td>
                <td className="py-4 px-6">{offer.createdAt}</td>
                <td className="py-4 px-6">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                    {offer.status}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <UpdateStatusShipping id={offer.id} />
                </td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewOffers;
