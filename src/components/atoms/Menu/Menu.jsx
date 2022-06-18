import PropTypes from 'prop-types';
import * as S from './style';

export function Menu({ children, className }) {
  return <S.Div className={className}>{children}</S.Div>;
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Menu.defaultProps = {
  className: '',
};
