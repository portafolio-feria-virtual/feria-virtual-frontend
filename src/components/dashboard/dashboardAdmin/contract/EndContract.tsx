import { useState } from 'react';
import { Modal } from '../../../ui';

const EndContract = ({ id, companyName }: { id: string; companyName: string }) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => setOpen(false);

  const handleOpen = () => setOpen(true);

  const handleEndContract = (id: string) => {
    console.log('Terminar contrato con id: ', id);
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className="text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2 focus:outline-none">
        Terminar
      </button>

      <Modal isOpen={open} onRequestClose={handleClose}>
        <div className="space-y-5">
          <h2 className="text-green-600 mb-5">Terminación de contratos</h2>
          <p>
            ¿Está seguro de terminar el contrato con <strong>{companyName}</strong>?
          </p>
          <div className="flex justify-end space-x-2">
            <button
              onClick={handleClose}
              className="text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none">
              Cancelar
            </button>
            <button
              onClick={() => handleEndContract(id)}
              className="text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none">
              Terminar
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default EndContract;
