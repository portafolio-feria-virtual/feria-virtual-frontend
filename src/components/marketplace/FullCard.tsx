// Tarjeta al ver el detalle del producto y querer comprarlo
import { IProductData } from '../../interfaces/marketplace.interface';

export const FullCard = ({ title, price, img, stock }: IProductData) => {
  return (
    <div>
      <div className="flex flex-row items-center justify-center bg-white rounded-sm border shadow-md gap-16">
        <img
          className="object-cover m-2 w-96 h-auto rounded-lg"
          src={img}
          alt="Product image"
        />
        <div className="flex flex-col justify-between p-4 leading-normal gap-2">
          <h1 className="text-xl font-semibold tracking-tight text-gray-900">
            {title}
          </h1>
          <p className="text-3xl font-bold text-gray-900">${price}</p>
          <div className="flex gap-2">
            <p>Cantidad</p>
            <input type="text" className="border rounded-lg" />
            <p>({stock} disponibles)</p>
          </div>
          <button className="bg-gray-500 text-white rounded-lg">Comprar</button>
          <button className="bg-gray-400 text-white rounded-lg">
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};
