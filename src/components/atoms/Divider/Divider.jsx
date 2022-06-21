import PropTypes from 'prop-types';
import * as S from './style';

export function Divider({ type }) {
  return <S.Divider className={type} />;
}

Divider.defaultProps = {
  type: 'horizontal',
};

Divider.propTypes = {
  type: PropTypes.oneOf(['horizontal', 'vertical']),
};
