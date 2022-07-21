import { useNavigate } from 'react-router-dom';
import { logout } from '../services/auth';
import Button from './button';

const Header = () => {
  const navigate = useNavigate();

  const LogoutUser = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="w-full p-3 ">
      <Button
        className="h-10 w-full rounded-lg font-bold text-white bg-violet-500 hover:bg-purple-800 hover:text-lg ease-in-out duration-500 active:bg-fuchsia-700 active:cursor-progress active:border-2 active:border-pink-500"
        text="Sair"
        onClick={LogoutUser}
      />
    </div>
  );
};

export default Header;
