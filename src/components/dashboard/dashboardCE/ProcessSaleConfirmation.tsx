import { useState } from 'react';
import { Modal } from '../../ui';
import { IProcessSale } from '../../../interfaces';
import { AuthContext } from '../../../contexts/authContext';

export const ProcessSaleConfirmation = (data: IProcessSale) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => setOpen(false);

  const handleOpen = () => setOpen(true);

  return (
    <>
      <button
        onClick={handleOpen}
        className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none">
        Procesar venta
      </button>

      <Modal isOpen={open} onRequestClose={handleClose}>
        <h2 className="text-green-600 mb-5">Resumen del proceso</h2>

        <form className="space-y-5">
          <div className="flex flex-col space-y-3">
            <h3>Información del proceso</h3>
            <span>
              Proceso: <strong>{data.name}</strong>
            </span>
            <span>
              Fecha: <strong>{data.endDate}</strong>
            </span>
            <span>
              Descripción: <strong>{data.description}</strong>
            </span>
          </div>

          <div className="flex flex-col space-y-3">
            <h3>Ubicación</h3>
            <span>
              Pais: <strong>{data.country}</strong>
            </span>
            <span>
              Región: <strong>{data.region}</strong>
            </span>
            <span>
              Ciudad: <strong>{data.city}</strong>
            </span>
            <span>
              Calle: <strong>{data.street}</strong>
            </span>
            <span>
              Código postal: <strong>{data.postalCode}</strong>
            </span>
          </div>

          <div className="space-y-3">
            <h3>Productos</h3>
            <table className="w-full table-auto border-2 border-dashed border-green-500">
              <thead className="text-xs uppercase">
                <tr className="mb-2">
                  <th className="text-left">Producto</th>
                  <th className="text-left">Cantidad (Kg)</th>
                </tr>
              </thead>
              <tbody>
                {data.productList.map((product, index) => (
                  <tr key={index}>
                    <td>
                      <span>{product.name}</span>
                    </td>
                    <td>
                      <span>{product.amount}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </form>
      </Modal>
    </>
  );
};
