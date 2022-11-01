import { Action } from "history";
import { useState } from "react";
import { IProcessSale } from "../../../interfaces";
import { ContractTable } from "../../contract/ContractTable";
import { SaleTable } from "../../sale/SaleTable";





const data: IProcessSale[] = [
    {
        id: '1',
        name: 'Venta empanada' ,
        description: 'Queso',
        country: 'Chile',
        region: 'Melipilla',
        city: 'Melipilla',
        street: 'Calle 13',
        postalCode: '23234',
        productList: [],
        maxAmount: 100000000,
        processStatus: 'Publicada',
        initDate: '23/10/2022',
        closeDate: '24/10/2023',
        
    },
    {
        id: '',
        name: '' ,
        description: '',
        country: '',
        region: '',
        city: '',
        street: '',
        postalCode: '',
        productList: [],
        maxAmount: 0,
        processStatus: 'Publicada',
        initDate: '',
        closeDate: '',
    }
  ];
  
  export const ViewProcessA = () => {
    const date = new Date();
    console.log(date);
    const [search, setSearch] = useState<string>('');
    //const [dateSearch, setDateSearch] = useState<string>('');
  
    return (
      <div className="mt-5 ">
        <h1 className= "text-green-400 pl-20">Listado de proceso Administrador</h1>
        <div className="flex items-end justify-end ">
        </div>
        <br />
        <div className="overflow-x-auto relative">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:text-gray-400 border">
              <tr>
                <th scope="col" className="py-3 px-6 border">
                  Id Proceso
                </th>
                <th scope="col" className="py-3 px-6 border">
                  Nombre
                </th>
                <th scope="col" className="py-3 px-6 border">
                  Descripcion
                </th>
                <th scope="col" className="py-3 px-6 border">
                  Pais
                </th>
                <th scope="col" className="py-3 px-6 border">
                  Region
                </th>
                <th scope="col" className="py-3 px-6 border">
                  Ciudad
                </th>
                <th scope="col" className="py-3 px-6 border">
                  Calle
                </th>
                <th scope="col" className="py-3 px-6 border">
                  Codigo postal
                </th>
                <th scope="col" className="py-3 px-6 border">
                  Lista de producto
                </th>
                <th scope="col" className="py-3 px-6 border">
                  Monto
                </th>
                <th scope="col" className="py-3 px-6 border">
                  Estado de proceso
                </th>
                <th scope="col" className="py-3 px-6 border">
                  Fecha Inicio
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
                .map(Process => (
                  <SaleTable key={Process.id} {...Process} />
                ))
                .filter(
                  process =>
                    process.props.id
                      .toLowerCase()
                      .includes(search.toLowerCase())
                )}
            </tbody>
          </table>
        </div>
      </div>
    );
  };