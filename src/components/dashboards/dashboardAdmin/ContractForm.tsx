export const ContractForm = () => {
    return (
      <div className="flex flex-col items-center">
        <h2 className="pl-20">¡BIENVENIDO A LA CREACION DE CONTRATOS!</h2>
        
        <div className="pl-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 mt-6">
            Empresa de contrato
          </label>
          <input
            type="text"
            id="Empresa_contrato"
            className=" mt-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-lg p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Empresa"
            required
          />
        </div>
        {
          //
        }
        <div date-rangepicker className="flex items-center pl-5">
          <div className="relative mt-3">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"></path>
              </svg>
            </div>
            <input
              name="start"
              type="date"
              className=" mt-3 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Fecha inicio"
            />
          </div>
          <span className="mx-4 text-gray-500 mt-3">--</span>
          <div className="relative mt-3">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"></path>
              </svg>
            </div>
            <input
              name="end"
              type="date"
              className=" mt-3 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Fecha termino"
            />
          </div>
          {
            //
          }
  
        </div>
          <div className="pl-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 mt-3">
          Subir pdf
        </label>
        <input
          className="block w-lg text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 mt-3"
          id="file_input"
          type="file"></input>
          </div>
      </div>
    );
  };
