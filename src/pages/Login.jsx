import { useState } from 'react';
import { IoMdKey } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import AlertModal from '../components/AlertModal';
import Button from '../components/button';
import InputEdit from '../components/InputEdit';
import api from '../services/api';
import { setToken } from '../services/auth';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
  // from-sky-900 via-sky-500 to-sky-400

  const authToDo = async () => {
    try {
      const { data } = await api.post('auth', {
        email,
        password,
      });

      if (data.token) {
        api.defaults.headers.authorization = data.token;
        // Vou precisar setar no localStorage
        setToken(data.token);
        // localStorage.setItem('token', JSON.stringify(data.token));
        navigate('/tasks');
      }
    } catch ({ response }) {
      setErrorMessage(response.data.message);
      // console.log('error: ', response.data);
    }
  };

  const clearError = () => {
    setErrorMessage('');
  };

  return (
    <main className="bg-gradient-to-r from-indigo-900 via-purple-500 to-pink-500 min-h-screen flex justify-center items-center">
      {/* <h1>Login</h1> */}
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

        {errorMessage && <AlertModal execCloseModal={clearError} message={errorMessage} />}
      </form>
    </main>
  );
};

export default Login;