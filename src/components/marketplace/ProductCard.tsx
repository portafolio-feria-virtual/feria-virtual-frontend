import { useState } from 'react';
import { AiOutlineHeart, AiFillHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { ProductData } from '../../interfaces';

const ProductCard = ({ title, price, image, stock, ubication }: ProductData) => {
  const [fav, setFav] = useState(false);
  const [count, setCount] = useState(1);

  const handleFav = () => setFav(!fav);

  const handleCount = (type: 'add' | 'remove') => {
    if (type === 'add') {
      setCount(count + 1);
    } else {
      if (count > 1) {
        setCount(count - 1);
      }
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setCount(value);
    }
  };

  return (
    <div className="group max-w-sm w-full relative shadow-lg  rounded-bl-md rounded-br-md">
      <div
        className="cursor-pointer absolute right-2 top-2 p-2 bg-slate-100/80 rounded-full"
        onClick={handleFav}>
        {fav ? (
          <AiFillHeart size={20} className="text-red-500" />
        ) : (
          <AiOutlineHeart size={20} className="text-red-500 " />
        )}
      </div>

      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover transition-colors duration-500 supports-backdrop-blur:bg-white/20 bg-slate-50/90 rounded-tl-md rounded-tr-md"
      />

      <div className="p-4">
        <h3 className="text-2xl font-bold text-slate-700 mb-2">{title}</h3>

        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center">
            <span className="text-slate-500 text-sm">
              Stock: <strong>{stock}</strong>
            </span>
          </div>

          <div className="flex items-center">
            <span className="text-slate-500 text-sm">
              Ubicación: <strong>{ubication}</strong>
            </span>
          </div>
        </div>

        <div className="flex items-center pt-6 mt-4 border-t border-slate-200">
          <div className="min-w-fit">
            <h3 className="text-gray-700 font-semibold">$ {price.toLocaleString('es-CL')} CLP</h3>
            <small>* Valor en pesos chilenos.</small>
          </div>

          <div className="flex flex-row h-10 w-24 rounded-lg relative bg-transparent mt-1 ml-auto">
            <button
              onClick={() => handleCount('remove')}
              className=" bg-gray-200 hover:bg-gray-300 text-gray-600 hover:text-gray-600 h-full w-20 rounded-l cursor-pointer outline-none">
              <span className="m-auto text-2xl font-thin">−</span>
            </button>
            <input
              type="number"
              className="focus:outline-none text-center w-full bg-gray-200 font-semibold text-md hover:text-slate-900 focus:text-slate-900  md:text-basecursor-default flex items-center text-gray-700  outline-none"
              value={count}
              onChange={handleOnChange}
              min={1}
              max={stock} // Replace with product stock
            />
            <button
              onClick={() => handleCount('add')}
              className="bg-gray-200 hover:bg-gray-300 hover:text-gray-600 h-full w-20 rounded-r cursor-pointer">
              <span className="m-auto text-2xl font-thin">+</span>
            </button>
          </div>
        </div>

        <div className="flex items-center pb-2 mt-6 pt-5 border-t border-slate-200 ">
          <button className="bg-green-500 hover:bg-green-600 text-white rounded-md p-3 w-full">
            Comprar ahora
          </button>

          <div className="ml-4 bg-slate-200 hover:bg-slate-300 p-2 rounded-full cursor-pointer">
            <AiOutlineShoppingCart size={25} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
