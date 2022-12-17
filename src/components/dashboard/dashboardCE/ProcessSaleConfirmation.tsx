import { useState } from 'react';
import { Button, Modal } from '../../ui';
import { IProcessSale } from '../../../interfaces';
import CarrierOfferCE from './CarrierOfferCE';
import ProducerOfferCE from './ProducerOfferCE';
import { toast } from 'react-hot-toast';

export const ProcessSaleConfirmation = (data: IProcessSale) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => {
    toast.success('Proceso de ventas creado con éxito', {
      duration: 3000
    });

    setOpen(false);
  };

  const handleOpen = () => setOpen(true);

  return (
    <>
      <Button onClick={handleOpen} text="Agregar Pedido" />

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

          <div className="py-10 space-y-5">
            <CarrierOfferCE />

            <ProducerOfferCE />
          </div>

          <Button onClick={handleClose} text="Procesar Venta" />
        </form>
      </Modal>
    </>
  );
};
