import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useCookie } from 'hooks';

export default function PrivateRoute({ Children }) {
  const { checkCookie } = useCookie();

  return !checkCookie() ? <Children /> : <Navigate to="/" />;
}

PrivateRoute.propTypes = {
  Children: PropTypes.func.isRequired,
};
