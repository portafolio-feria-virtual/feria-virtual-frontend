import ReactModal from 'react-modal';
import { HiOutlineX } from 'react-icons/hi';

type ModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  children: JSX.Element | JSX.Element[];
};

export const Modal = ({ isOpen, onRequestClose, children }: ModalProps) => {
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      border: 'none',
      'overflow-Y': 'scroll',
      maxHeight: '90vh'
    }
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      style={customStyles}>
      <span className="flex">
        <HiOutlineX onClick={onRequestClose} size={25} className="cursor-pointer ml-auto mb-3" />
      </span>
      {children}
    </ReactModal>
  );
};
