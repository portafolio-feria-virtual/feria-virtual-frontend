// Tarjeta al ver el detalle del producto y querer comprarlo

// how to center in tailwind?

export const FullCard = (/* { title, price, img, stock } */) => {
  return (
    <div>
        <div className="flex flex-row items-center justify-center bg-white rounded-sm border shadow-md gap-16">
            <img className="object-cover m-2 w-96 h-auto rounded-lg" src="https://www.65ymas.com/uploads/s1/23/51/17/naranjas-beneficios-contraindicaciones-y-recomendaciones-con-ellas.jpeg" alt="Product image"/>
            <div className="flex flex-col justify-between p-4 leading-normal gap-2">
                <h1 className="text-xl font-semibold tracking-tight text-gray-900">Naranjas por kilo</h1>
                <p className="text-3xl font-bold text-gray-900">$3.000</p>
                <div className="flex gap-2">
                    <p>Cantidad</p>
                    <input type="text" className="border rounded-lg"/>
                    <p>(100 disponibles)</p>
                </div>
                <button className="bg-gray-500 text-white rounded-lg">Comprar</button>
                <button className="bg-gray-400 text-white rounded-lg">Agregar al carrito</button>
            </div>
        </div>
    </div>
  )
}
