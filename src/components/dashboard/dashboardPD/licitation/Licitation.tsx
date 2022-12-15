import { IProcessSale } from '../../../../interfaces';

export default function Licitation({
  name,
  description,
  maxAmount,
  processStatus,
  initDate,
  endDate
}: IProcessSale) {
  return (
    <div className="border flex flex-col gap-9 p-10">
      <h2>{name}</h2>
      <h3>{description}</h3>
      <h3>
        Estado: <strong>{processStatus}</strong>
      </h3>
      <div className="grid grid-cols-3">
        <div>
          <h2>Monto Disponible</h2>
          <h3>${maxAmount.toString()}</h3>
        </div>
        <div>
          <h2>Fecha Publicación</h2>
          <h3>{initDate}</h3>
        </div>
        <div>
          <h2>Fecha Cierre</h2>
          <h3>{endDate}</h3>
        </div>
      </div>
    </div>
  );
}
