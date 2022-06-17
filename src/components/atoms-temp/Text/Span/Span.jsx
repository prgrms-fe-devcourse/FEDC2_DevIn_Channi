import PropTypes from 'prop-types';
import * as S from './style';

export function Span({ children, className, fontSize, bold, color }) {
  return (
    <S.Span className={className} fontSize={fontSize} bold={bold} color={color}>
      {children}
    </S.Span>
  );
}

Span.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  fontSize: PropTypes.oneOf(['tiny', 'small', 'regular', 'large']),
  bold: PropTypes.bool,
  color: PropTypes.oneOf(['textPrime', 'textSecond']),
};

Span.defaultProps = {
  className: '',
  fontSize: 'regular',
  bold: false,
  color: 'textPrime',
};
