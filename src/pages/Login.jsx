import { useState } from 'react';
import { IoMdKey } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import AlertModal from '../components/AlertModal';
import Button from '../components/button';
import InputEdit from '../components/InputEdit';
import SignUp from '../components/SignUp';
import api from '../services/api';
import { setToken } from '../services/auth';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const authToDo = async () => {
    try {
      const { data } = await api.post('auth', {
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

  const handleIsSignUp = () => {
    setIsSignUp((prevState) => !prevState);
  };

  const clearError = () => {
    setErrorMessage('');
  };

  return (
    <main className="bg-gradient-to-r from-indigo-900 via-purple-500 to-pink-500 min-h-screen flex justify-center items-center">
      <form className="h-96 flex flex-col justify-center w-96 px-12 rounded-2xl bg-white-rgba shadow-2xl gap-4">
        <p className="text-center font-bold text-2xl text-white">Login</p>
        <p className="text-white text-sm">Faça login para gerenciar sua conta</p>
        <InputEdit type="email" name="email" placeholder="Email" value={email} onChange={setEmail}>
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

        <Button text="Entrar" onClick={authToDo} />
        <Button
          className="font-bold text-white hover:text-pink-200"
          text="Cadastre-se"
          onClick={handleIsSignUp}
        />

        {errorMessage && <AlertModal execCloseModal={clearError} message={errorMessage} />}
        {isSignUp && <SignUp execCloseModal={handleIsSignUp} />}
      </form>
    </main>
  );
};

export default Login;
