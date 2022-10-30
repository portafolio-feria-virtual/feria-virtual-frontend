import { IProcessSale } from '../../../interfaces';

export default function LicitationDetail({
  name,
  description,
  maxAmount,
  processStatus,
  closeDate,
  country,
  productList
}: IProcessSale) {
  return (
    <div>
      <div className="border flex flex-col gap-9 p-10">
        <h2>{name}</h2>
        <h3>Cierre: {closeDate}</h3>
        <h3>Estado: {processStatus}</h3>
        <div className="grid grid-cols-4">
          <div>
            <button>Ofertar</button>
          </div>
          <div>
            <button>Ver Ofertas</button>
          </div>
          <div>
            <button>Ver Adjudicado</button>
          </div>
          <div>
            <button>Ver Orden de Compra</button>
          </div>
        </div>
        {/* Detalle de la Licitacion */}
        <div>
          <h2>Detalles</h2>
          <h3>{description}</h3>
          <h3>Pais de destino: {country}</h3>
          <h3>Lista de Productos solicitados</h3>
          <ul>
            {productList.map((product)=>(
                <li key={product.id}>{product.name}: {product.amount}</li>
            ))}
          </ul>
          <h3>Monto Disponible: ${maxAmount.toLocaleString()}</h3>
        </div>
      </div>
    </div>
  );
}
