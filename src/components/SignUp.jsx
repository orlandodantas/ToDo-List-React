import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { FaUserEdit } from 'react-icons/fa';
import { IoMdKey } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import { setToken } from '../services/auth';
import AlertModal from './AlertModal';
import Button from './button';
import InputEdit from './InputEdit';

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const SignUp = ({ execCloseModal }) => {
  const navigate = useNavigate();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'rgba(255,255,255,0.1)',
      border: 'none',
      width: '450px',
      height: '450px',
    },
    overlay: {
      // backgroundColor: 'rgba(25, 0, 255, 0.75)',
    },
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    execCloseModal();
    setIsOpen(false);
  };

  const createUser = async () => {
    try {
      const { data } = await api.post('users', {
        name: userName,
        email,
        password,
      });

      if (data.token) {
        setToken(data.token);
        navigate('/tasks');
      }
    } catch ({ response }) {
      setErrorMessage(response.data.message);
    }
  };

  const clearError = () => {
    setErrorMessage('');
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
        <div className="w-full h-full flex justify-center items-center">
          <form className="h-96 flex flex-col justify-center w-96 px-12 rounded-2xl bg-fuchsia-700 shadow-2xl gap-4">
            <p className="text-center font-bold text-2xl text-white">Cadastro</p>
            <p className="text-white text-sm">Faça seu cadastro para acessar seu painel</p>

            <InputEdit
              type="text"
              name="nome"
              placeholder="Nome"
              value={userName}
              onChange={setUserName}
            >
              <FaUserEdit />
            </InputEdit>

            <InputEdit
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={setEmail}
            >
              <MdEmail />
            </InputEdit>

            <InputEdit
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={setPassword}
            >
              <IoMdKey />
            </InputEdit>

            <Button text="Salvar" onClick={createUser} />
          </form>
        </div>

        {errorMessage && <AlertModal execCloseModal={clearError} message={errorMessage} />}
      </Modal>
    </div>
  );
};

SignUp.propTypes = {
  execCloseModal: PropTypes.func.isRequired,
};

// AlertModal.defaultProps = {
//   title: 'Error',
//   backgroundColor: 'red',
// };

export default SignUp;
