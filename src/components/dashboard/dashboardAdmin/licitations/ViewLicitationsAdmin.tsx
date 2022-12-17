import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';
import { licitationHeaderAdmin, licitationsAdmin } from '../../../ui/utils';

const ViewLicitationsAdmin = () => {
  return (
    <>
      <h2>Ver licitaciones</h2>
      <p>
        En esta sección podrás ver las <strong>Licitaciones</strong> que se han realizado en la
        plataforma.
      </p>

      <div className="mt-10">
        <table className="w-full max-w-7xl text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr className="text-left">
              {licitationHeaderAdmin.map(header => (
                <th key={header} scope="col" className="py-3 px-6">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {licitationsAdmin.map((licitation, index) => (
              <tr key={licitation.id} className="bg-white border-b whitespace-nowrap">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900/50 whitespace-nowrap">
                  {index + 1}
                </th>
                <td className="py-4 px-6">{licitation.name}</td>
                <td className="py-4 px-6">{licitation.description}</td>
                <td className="py-4 px-6">{licitation.amount}</td>
                <td className="py-4 px-6">
                  {licitation.fileName ? (
                    <AiFillCheckCircle size={25} className="text-green-500" />
                  ) : (
                    <AiFillCloseCircle size={25} className="text-red-500" />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ViewLicitationsAdmin;
