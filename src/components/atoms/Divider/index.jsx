import PropTypes from 'prop-types';
import * as S from './style';

export function Divider({ type, size }) {
  const dividerStyle = {
    margin: type === 'vertical' ? `0 ${size}px` : `${size}px 0`,
  };
  return <S.Divider className={type} style={{ dividerStyle }} />;
}

Divider.defaultProps = {
  type: 'horizontal',
  size: 8,
};

Divider.propTypes = {
  type: PropTypes.oneOf(['horizontal', 'vertical']),
  size: PropTypes.number,
};
