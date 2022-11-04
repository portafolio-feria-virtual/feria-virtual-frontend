import { useState } from 'react';
import { ContractTable } from '../../contract/ContractTable';
import { IContract } from '../../../interfaces';

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

export const ViewContract = () => {
  const date = new Date();
  console.log(date);
  const [search, setSearch] = useState<string>('');

  return (
    <div className="mt-5 ">
      <h1>Listado de contrados</h1>
      <h2>Filtros</h2>
      <div className="flex items-end justify-end ">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ">
          Agregar Contrato
        </button>
      </div>
      <div className="flex gap-10">
        <input
          type="text"
          placeholder="Empresa"
          className="border"
          onChange={event => setSearch(event.target.value)}
        />
        <input
          type="text"
          placeholder="Fecha Inicio"
          className="border"
          //onChange={e => setDateSearch(e.target.value)}
        />
        <input
          type="text"
          placeholder="Fecha Fin"
          className="border"
          //onChange={e => setDateSearch(e.target.value)}
        />
        <select name="" id="" defaultValue="" className="border">
          <option value="" disabled selected>
            Ordenar por Fecha Inicio
          </option>
          <option value="Newer_init">Más reciente</option>
          <option value="Older_init">Más antiguo</option>
        </select>
        <select name="" id="" defaultValue="" className="border">
          <option value="" disabled selected>
            Ordenar por Fecha Termino
          </option>
          <option value="Newer_end">Más reciente</option>
          <option value="Older_end">Más antiguo</option>
        </select>
      </div>
      <div className="overflow-x-auto relative">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:text-gray-400 border">
            <tr>
              <th scope="col" className="py-3 px-6 border">
                Id contrato
              </th>
              <th scope="col" className="py-3 px-6 border">
                Empresa
              </th>
              <th scope="col" className="py-3 px-6 border">
                Fecha Inicio
              </th>
              <th scope="col" className="py-3 px-6 border">
                Fecha Modificación
              </th>
              <th scope="col" className="py-3 px-6 border">
                Fecha Término
              </th>
              <th scope="col" className="py-3 px-6 border">
                Acciones
              </th>
            </tr>
          </thead>
          {
            //cuerpo de la tabla
          }
          <tbody>
            {data
              .map(contract => (
                <ContractTable key={contract.id} {...contract} />
              ))
              .filter(
                company =>
                  company.props.companyName
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  company.props.idContract
                    .toLowerCase()
                    .includes(search.toLowerCase())
              )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
