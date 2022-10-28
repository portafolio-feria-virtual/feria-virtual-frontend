import { IProcessSale } from '../../../interfaces';

export default function Licitation({
  name,
  description,
  maxAmount,
  processStatus,
  initDate,
  closeDate
}: IProcessSale) {
  return (
    <div className="border flex flex-col gap-9 p-10">
      <h2>{name}</h2>
      <h3>{description}</h3>
      <h3>Estado: {processStatus}</h3>
      <div className="grid grid-cols-3">
        <div>
          <h2>Monto Disponible</h2>
          <h3>${maxAmount.toLocaleString()}</h3>
        </div>
        <div>
          <h2>Fecha Publicación</h2>
          <h3>{initDate}</h3>
        </div>
        <div>
          <h2>Fecha Cierre</h2>
          <h3>{closeDate}</h3>
        </div>
      </div>
    </div>
  );
}
