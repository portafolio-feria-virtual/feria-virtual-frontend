import Modal from 'react-modal';
import { HiOutlineX } from 'react-icons/hi';

type Props = {
  isOpen: boolean;
  close: () => void;
  children: JSX.Element | JSX.Element[];
};

export const CustomModal = ({ isOpen, close, children }: Props) => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={close}
        ariaHideApp={false}
        style={customStyles}>
        <span className="flex">
          <HiOutlineX
            onClick={close}
            size={25}
            className="cursor-pointer ml-auto mb-3"
          />
        </span>
        {children}
      </Modal>
    </div>
  );
};

export default CustomModal;
