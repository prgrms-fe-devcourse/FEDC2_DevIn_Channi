import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export function StyledLink({ children, className, to }) {
  return (
    <Link className={className} to={to}>
      {children}
    </Link>
  );
}

StyledLink.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};
