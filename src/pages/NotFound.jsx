import { useNavigate } from 'react-router-dom';
import Button from '../components/button';

// const RedirectHome = () => <Navigate to="/" />;

const NotFound = () => {
  const navigate = useNavigate();

  const RedirectHome = () => {
    navigate('/');
  };

  return (
    <div className="w-96 m-auto pt-24">
      <p className="text-center font-extrabold text-6xl">Ops!</p>
      <p className="text-center text-lg mt-3 text-red-700">404 - Página não encontrada</p>
      <Button text="Página Inicial" onClick={RedirectHome} />
    </div>
  );
};

export default NotFound;
