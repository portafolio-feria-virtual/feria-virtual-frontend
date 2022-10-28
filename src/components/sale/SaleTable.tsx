import { IProcessSale } from "../../interfaces";

export const SaleTable = ({
    id,
  name,
  description,
  country,
  region,
  city,
  street,
  postalCode,
  productList,
  maxAmount,
  processStatus,
  initDate,
  closeDate,

  }:IProcessSale) => {
    return (
      <tr key={id} className="border">
        <td className="py-4 px-6 border">{id}</td>
        <td className="py-4 px-6 border">{name}</td>
        <td className="py-4 px-6 border">{description}</td>
        <td className="py-4 px-6 border">{country}</td>
        <td className="py-4 px-6 border">{region}</td>
        <td className="py-4 px-6 border">{city}</td>
        <td className="py-4 px-6 border">{street}</td>
        <td className="py-4 px-6 border">{postalCode}</td>
       < td className="py-4 px-6 border">{}</td>
        <td className="py-4 px-6 border">{maxAmount}</td>
        <td className="py-4 px-6 border">{processStatus}</td>
        <td className="py-4 px-6 border">{initDate}</td>
        <td className="py-4 px-6 border">{closeDate}</td>
        <td className="flex flex-col py-4 px-6 ">
          <button
            type="button"
            className="text-white bg-green-400 hover:bg-green-400 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Ver detalles
          </button>
        
        </td>
      </tr>
    );
  };