//Filtros para busqueda de productos

import { IoIosArrowForward } from "react-icons/io";

export const Filters = (/* { ubication, minprice, maxprice } */) => {
  return (
    <div className="">

        <h2>Filtros</h2>

        <div className="flex gap-6">
            <h4>Ubicación</h4>
            <select className="w-full border rounded-lg"></select>
        </div>

        <div className="flex gap-6">
            <h4>Precio</h4>
            <div className="flex gap-6 w-full">
                <input type="text" className="w-full border rounded-lg" placeholder="Mínimo" />
                <h4>-</h4>
                <input type="text" className="w-full border rounded-lg" placeholder="Máximo" />
                <button className="rounded-full bg-gray-500 h-auto w-16"><IoIosArrowForward className="w-full fill-white"/></button>
            </div>
        </div>
        
    </div>
  )
}
