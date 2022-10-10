//Filtros para busqueda de productos

import { IoIosArrowForward } from 'react-icons/io';

export const Filters = (props: any) => {
  function onFilterChanged(event: any) {
    props.filterSelected(event.target.value);
  }

  return (
    <div className="">
      <h2>Filtros</h2>

      <div className="flex gap-6">
        <h4>Ubicación</h4>
        <select className="w-full border rounded-lg" onChange={onFilterChanged}>
          <option value="all"></option>
          <option value="Melipilla">Melipilla</option>
          <option value="Santiago">Santiago</option>
        </select>
      </div>

      <div className="flex gap-6">
        <h4>Precio</h4>
        <div className="flex gap-6 w-full">
          <input
            type="text"
            className="w-full border rounded-lg"
            placeholder="Mínimo"
          />
          <h4>-</h4>
          <input
            type="text"
            className="w-full border rounded-lg"
            placeholder="Máximo"
          />
          <button className="rounded-full bg-gray-500 h-auto w-16">
            <IoIosArrowForward className="w-full fill-white" />
          </button>
        </div>
      </div>
    </div>
  );
};
