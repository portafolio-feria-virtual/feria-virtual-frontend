// Tarjeta al realizar busqueda de producto

export const ExtendedCard = (/* { title, price, img } */) => {
  return (
    <div>
        <div className="flex flex-row items-center bg-white rounded-sm border shadow-md">
            <img className="object-cover m-2 w-48 h-auto rounded-lg" src="https://www.65ymas.com/uploads/s1/23/51/17/naranjas-beneficios-contraindicaciones-y-recomendaciones-con-ellas.jpeg" alt="Product image"/>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900">Naranjas por kilo</h5>
                <p className="text-3xl font-bold text-gray-900">$3.000</p>
            </div>
        </div>
    </div>
  )
}
