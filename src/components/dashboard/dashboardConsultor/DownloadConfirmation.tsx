import { useState } from 'react';
import { AiOutlineClose, AiOutlineCloudDownload } from 'react-icons/ai';
import { Modal } from '../../ui/Modal';

const DownloadConfirmation = ({ id }: { id: string }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    console.log('Descargar reporte', id);
    setOpen(false);
  };

  return (
    <>
      <button
        className="flex space-x-2 items-center bg-green-500 text-white p-2 rounded-md"
        onClick={handleOpen}>
        <AiOutlineCloudDownload size={20} />
        <span className="font-semibold">Generar y Descargar</span>
      </button>

      <Modal isOpen={open} onRequestClose={handleClose}>
        <div className="flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-2xl font-semibold">Descargar Reporte</h1>
          <p className="text-gray-500 text-center">¿Está seguro que desea descargar el reporte?</p>
          <div className="flex space-x-4 mt-8">
            <button
              className="flex space-x-2 items-center bg-green-500 text-white p-2 px-3 rounded-md"
              onClick={handleClose}>
              <AiOutlineCloudDownload size={20} />
              <span className="font-semibold">Descargar</span>
            </button>
            <button
              className="flex space-x-2 items-center bg-red-500 text-white p-2 rounded-md"
              onClick={handleClose}>
              <AiOutlineClose size={20} />
              <span className="font-semibold">Cancelar</span>
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default DownloadConfirmation;
