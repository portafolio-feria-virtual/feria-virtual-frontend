// Tarjeta al realizar busqueda de producto
import { IMarketplace } from '../../interfaces/Marketplace.interfaces'


export const ExtendedCard = ( props: IMarketplace ) => {
  const {title, price, img} = props.productData;

  return (
    <div>
        <div className="flex flex-row items-center bg-white rounded-sm border shadow-md">
            <img className="object-cover m-2 w-48 h-auto rounded-lg" src={img} alt="Product image"/>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900">{title}</h5>
                <p className="text-3xl font-bold text-gray-900">${price}</p>
            </div>
        </div>
    </div>
  )
}
