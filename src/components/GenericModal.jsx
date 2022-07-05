import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Button from './button';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'orange',
    // width: '95%',
  },
  overlay: {
    backgroundColor: 'rgba(100, 40, 255, 0.75)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const GenericModal = ({ execCloseModal, children, textButton }) => {
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
        {children}
        <Button text={textButton} onClick={closeModal} />
      </Modal>
    </div>
  );
};

GenericModal.propTypes = {
  execCloseModal: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  textButton: PropTypes.string,
};

GenericModal.defaultProps = {
  textButton: 'Não',
};

export default GenericModal;
