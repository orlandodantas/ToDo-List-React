import PropTypes from 'prop-types';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Tasks from './pages/Tasks';

import { isAuthenticated } from './services/auth';

const PrivateRoute = ({ children, redirectTo }) =>
  isAuthenticated() ? children : <Navigate to={redirectTo} />;

PrivateRoute.propTypes = {
  children: PropTypes.element.isRequired,
  redirectTo: PropTypes.string.isRequired,
};

const RoutesPage = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route
      path="/tasks"
      element={
        <PrivateRoute redirectTo="/">
          <Tasks />
        </PrivateRoute>
      }
    />
  </Routes>
);

export default RoutesPage;

// Credits: https://www.youtube.com/watch?v=x7rL7rPfg5w
