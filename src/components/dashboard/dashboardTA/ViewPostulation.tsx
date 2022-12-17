import EditPostulation from './EditPostulation';
import { postulationHeaderTA, postulationsTA } from '../../ui/utils';
import { Badge } from '../../ui';

const ViewPostulation = () => {
  return (
    <>
      <h2>Ver mis postulaciones</h2>

      <p>En esta sección podrás ver las postulaciones que has realizado a envíos.</p>

      <div className="overflow-x-auto relative max-w-7xl mt-10">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr className="text-left">
              {postulationHeaderTA.map(header => (
                <th key={header} scope="col" className="py-3 px-6">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {postulationsTA.map((postulation, index) => (
              <tr key={postulation.id} className="bg-white border-b">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900/50 whitespace-nowrap">
                  {index + 1}
                </th>
                <td className="py-4 px-6">{postulation.name}</td>
                <td className="py-4 px-6">{postulation.description}</td>
                <td className="py-4 px-6">{postulation.carrier}</td>
                <td className="py-4 px-6">{postulation.capacity}</td>
                <td className="py-4 px-6">{<Badge status={postulation.cooling} />}</td>
                <td className="py-4 px-6">{postulation.postDate}</td>
                <td className="py-4 px-6">${postulation.price.toLocaleString('es-CL')}</td>
                <td className="py-4 px-6">{<Badge status={postulation.assigned} />}</td>
                <td className="py-4 px-6">{postulation.accepted}</td>
                <td className="py-4 px-6">{<Badge status={postulation.closed} />}</td>
                <td className="py-4 px-6">{<Badge status={postulation.confirmed} />}</td>
                <td className="py-4 px-6">{<Badge status={postulation.editable} />}</td>

                <td className="py-4 px-6 space-y-2">
                  {<EditPostulation id={postulation.id} status={postulation.editable} />}
                </td>

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
      </div>
    </>
  );
};

export default ViewPostulation;
