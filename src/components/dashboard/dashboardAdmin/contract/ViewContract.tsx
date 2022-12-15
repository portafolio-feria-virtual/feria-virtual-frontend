import { useState } from 'react';
import { IContract } from '../../../../interfaces';
import { ContractTable } from './ContractTable';
import ContractForm from './ContractForm';

const data: IContract[] = [
  {
    id: 'AABB00',
    companyName: 'Ariztia',
    initDate: '26/10/2021',
    modifyDate: '27/11/2021',
    endDate: '25/12/2021'
  },
  {
    id: 'BBAA00',
    companyName: 'Santa Isabel',
    initDate: '27/10/2021',
    modifyDate: '28/11/2021',
    endDate: '26/12/2021'
  }
];

const ViewContract = () => {
  const [search, setSearch] = useState<string>('');

  const filteredData = data.filter(item => {
    return (
      item.companyName.toLowerCase().includes(search.toLowerCase()) ||
      item.id.toLowerCase().includes(search.toLowerCase())
    );
  });

  const renderTable = () => {
    return filteredData.map(item => {
      return <ContractTable key={item.id} {...item} />;
    });
  };

  const renderEmptyTable = () => {
    return (
      <tr className="border">
        <td className="py-4 px-6 border" colSpan={6}>
          No se encontraron resultados.
        </td>
      </tr>
    );
  };

  const viewContractHeader = [
    'Id contrato',
    'Empresa',
    'Fecha Inicio',
    'Fecha Modificación',
    'Fecha Término',
    'Acciones'
  ];

  return (
    <div>
      <h2>Ver Contratos</h2>

      <div className="flex flex-col items-center sm:flex-row pb-5 pt-10">
        <div className="flex w-full sm:w-fit mb-5 sm:mb-0 space-x-2 items-center">
          <h4 className="font-bold min-w-max">Filtrar por:</h4>
          <input
            type="text"
            placeholder="Empresa"
            className="border w-full rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        <ContractForm />
        {/* <button
          type="button"
          className="sm:ml-auto w-full sm:w-fit text-white bg-green-500 hover:bg-green-600 font-medium rounded-lg px-5 py-2 mb-2 sm:mb-0 focus:outline-none">
          Agregar Contrato
        </button> */}
      </div>

      <div className="overflow-x-auto relative">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:text-gray-400 border">
            {viewContractHeader.map((item, index) => (
              <th key={index} scope="col" className="py-3 px-6 border">
                {item}
              </th>
            ))}
          </thead>
          <tbody>{renderTable().length > 0 ? renderTable() : renderEmptyTable()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewContract;
