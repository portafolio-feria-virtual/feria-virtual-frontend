import { useState } from 'react';
import { MdUpdate } from 'react-icons/md';
import { Modal } from '../../ui/Modal';

export enum ShippingStatus {
  'Preparando envío',
  'Esperando Transporte',
  'Recibido en Transporte',
  'En camino',
  'Recibido en destino'
}

const UpdateStatusShipping = ({ id, status }: { id: string; status: boolean }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    console.log('Actualizar estado de envío', id);
    setOpen(false);
  };

  return (
    <>
      <button
        className={`border-dashed border-2 border-slate-500/50 flex space-x-2 items-center p-2 rounded-md ${
          !status && 'cursor-not-allowed opacity-50'
        }`}
        onClick={handleOpen}
        {...(!status && { disabled: true })}>
        <MdUpdate size={20} />
        <span className="font-semibold">Actualizar estado</span>
      </button>

      <Modal isOpen={open} onRequestClose={handleClose}>
        <div className="flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-2xl font-semibold">Actualizar Estado de Envío</h1>
          <p className="text-slate-500 text-center">
            ¿Está seguro que desea actualizar el estado de envío?
          </p>
          <div className="flex space-x-4 mt-8">
            <button
              className="flex space-x-2 items-center bg-green-500 text-white p-2 px-3 rounded-md"
              onClick={handleClose}>
              <MdUpdate size={20} />
              <span className="font-semibold">Actualizar</span>
            </button>
            <button
              className="flex space-x-2 items-center bg-red-500 text-white p-2 rounded-md"
              onClick={handleClose}>
              <MdUpdate size={20} />
              <span className="font-semibold">Cancelar</span>
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default UpdateStatusShipping;
