import { useState } from "react";
import {DefaultButton, LoadingButton} from '../../ui';

export const SaleProcessConfirmation = ({children}:any) => {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
     <div className=" mt-12 flex items-center justify-center bg-green-500 hover:bg-green-700 w-fit text-white font-semibold py-1 px-4 rounded-md focus:outline-none focus:shadow-outline">
     <DefaultButton        
        type="button"
        text="Confirmar Datos"
        onClick={() => setShowModal(true)}
      />
     </div>
      
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Confirmacion de datos
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  {children}
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <DefaultButton
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    text="Cerrar"
                    onClick={() => setShowModal(false)}
                  />                  
                  <DefaultButton text="Aceptar confirmacion" type="submit"/>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  )
}
