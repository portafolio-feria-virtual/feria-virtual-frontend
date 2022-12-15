const localSaleHeader = [''];

const localSales = [''];

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
              {localSaleHeader.map(header => (
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
                <td className="py-4 px-6">{offer.amount}</td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ViewLocalSalesAdmin;
