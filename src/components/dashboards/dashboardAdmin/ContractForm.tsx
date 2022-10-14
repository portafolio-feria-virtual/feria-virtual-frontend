import { DefaultButton, Input } from '../../ui';

const ContractForm = () => {
  return (
    <div className="flex flex-col items-center ">
      <h2 className="pl-20 text-green-600">
        ¡Bienvenido a la creacion de contratos!
      </h2>

      <div className="pl-2 mt-12 ">
        <Input
          type="text"
          name="Empresa"
          label="Empresa de contrato"
          placeholder="Empresa"
        />
      </div>


      <div date-rangepicker className="flex items-center pl-5">
        <div className="relative mt-3">
          <Input
            type="date"
            name="fecha_inicial"
            label="Fecha Inicio"
            placeholder="f"
          />
        </div>
        <span className="mx-4 text-gray-500 mt-10">--</span>

        <div className="relative mt-3">
          <Input
            type="date"
            name="fecha_Termino"
            label="Fecha Termino"
            placeholder="f"
          />
        </div>
        {
          //
        }
      </div>
      <div className="pl-5">
        <Input type="file" name="file" label="Subir pdf" placeholder="file" />
      </div>

      <div className=" mt-12 flex items-center justify-center bg-green-500 hover:bg-green-700 w-fit text-white font-semibold py-1 px-4 rounded-md focus:outline-none focus:shadow-outline">
        <DefaultButton text="Crear contrato" type="submit" />
      </div>
    </div>
  );
};
//mt-12 bg-green-600 rounded-r-lg border

export default ContractForm;
