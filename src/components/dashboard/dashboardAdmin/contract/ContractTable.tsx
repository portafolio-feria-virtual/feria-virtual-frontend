import { IContract } from '../../../../interfaces';
import ContractEditForm from './ContractEditForm';
import EndContract from './EndContract';
import ExtendContractDate from './ExtendContractDate';

export const ContractTable = ({ id, companyName, initDate, modifyDate, endDate }: IContract) => {
  return (
    <tr className="border">
      <td className="py-4 px-6 border">{id}</td>
      <td className="py-4 px-6 border">{companyName}</td>
      <td className="py-4 px-6 border">{initDate}</td>
      <td className="py-4 px-6 border">{modifyDate}</td>
      <td className="py-4 px-6 border">{endDate}</td>
      <td className="py-4 px-6 border space-y-3 lg:space-y-0 lg:space-x-3">
        <ContractEditForm id={id} companyName={companyName} initDate={initDate} endDate={endDate} />
        <EndContract id={id} companyName={companyName} />
        <ExtendContractDate initDate={initDate} />
      </td>
    </tr>
  );
};
