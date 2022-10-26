import { IContract } from '../../interfaces';

export const ContractTable = ({
  id,
  companyName,
  initDate,
  modifyDate,
  endDate
}: IContract) => {
  return (
    <tr key={id} className="border">
      <td className="py-4 px-6 border">{id}</td>
      <td className="py-4 px-6 border">{companyName}</td>
      <td className="py-4 px-6 border">{initDate}</td>
      <td className="py-4 px-6 border">{modifyDate}</td>
      <td className="py-4 px-6 border">{endDate}</td>
      <td className="flex flex-col py-4 px-6 ">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          Editar
        </button>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          Terminar
        </button>
      </td>
    </tr>
  );
};
