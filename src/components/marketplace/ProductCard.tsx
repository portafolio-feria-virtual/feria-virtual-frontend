// Tarjeta al iniciar sesion y ver recomendados
import { IProductData } from '../../interfaces/Marketplace.interfaces'

export const ProductCard = ({ productData: {title, price, img} }: IProductData) => {

  return (
    
    <div className="w-full max-w-sm bg-white rounded-lg shadow-lg border">
        <img className="p-8 rounded-lg" src={img} alt="product image"/>
        <div className="px-5 pb-5 ">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900">{title}</h5>
            <span className="text-3xl font-bold text-gray-900">${price}</span>
        </div>
    </div>

  )
}
