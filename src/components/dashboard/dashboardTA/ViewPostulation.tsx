const postulationHeader = [''];

const ViewPostulation = () => {
  return (
    <div>
      <h2>Ver mis postulaciones</h2>

      <div>
        <table className="w-full max-w-7xl text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr className="text-left">
              {postulationHeader.map(header => (
                <th key={header} scope="col" className="py-3 px-6">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* {postulations.map((postulation, index) => (
              <tr key={shipping.id} className="bg-white border-b">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900/50 whitespace-nowrap">
                  {index + 1}
                </th>
                <td className="py-4 px-6">{shipping.name}</td>
                <td className="py-4 px-6">{shipping.description}</td>
                <td className="py-4 px-6">{shipping.to}</td>
                <td className="py-4 px-6">{shipping.createdAt}</td>
                <td className="py-4 px-6">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                    {shipping.status}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <UpdateStatusShipping id={shipping.id} />
                </td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewPostulation;
