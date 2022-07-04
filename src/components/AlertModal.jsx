import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '10%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'red',
    width: '95%',
  },
  overlay: {
    backgroundColor: 'rgba(25, 0, 255, 0.75)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const AlertModal = ({ execCloseModal, title, message }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    execCloseModal();
    setIsOpen(false);
  };

  useEffect(() => openModal(), []);

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Alert Modal"
      >
        <h2 className="font-bold text-xl text-white">{title}</h2>
        <p className="text-white">{message}</p>
      </Modal>
    </div>
  );
};

AlertModal.propTypes = {
  execCloseModal: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  title: PropTypes.string,
};

AlertModal.defaultProps = {
  title: 'Error',
};

export default AlertModal;
