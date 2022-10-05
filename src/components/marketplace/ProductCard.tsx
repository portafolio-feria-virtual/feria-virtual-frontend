// Tarjeta al iniciar sesion y ver recomendados

export const ProductCard = (/* { title, price, img } */) => {
  return (
    
    <div className="w-full max-w-sm bg-white rounded-lg shadow-lg border">
        <img className="p-8 rounded-lg" src="https://www.65ymas.com/uploads/s1/23/51/17/naranjas-beneficios-contraindicaciones-y-recomendaciones-con-ellas.jpeg" alt="product image"/>
        <div className="px-5 pb-5 ">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900">Naranjas por kilo</h5>
            <span className="text-3xl font-bold text-gray-900">$3.000</span>
        </div>
    </div>

  )
}
