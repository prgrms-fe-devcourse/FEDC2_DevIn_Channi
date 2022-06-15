import PropTypes from 'prop-types';
import * as S from './style';

export function Divider({ type, size }) {
  return <S.Divider className={type} size={size} />;
}

Divider.defaultProps = {
  type: 'horizontal',
  size: 8,
};

Divider.propTypes = {
  type: PropTypes.oneOf(['horizontal', 'vertical']),
  size: PropTypes.number,
};
