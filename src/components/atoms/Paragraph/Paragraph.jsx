import PropTypes from 'prop-types';
import * as S from './style';

export function Paragraph({
  children,
  className,
  fontSize,
  bold,
  color,
  isTruncated,
  lineClamp,
}) {
  return (
    <S.P
      className={className}
      fontSize={fontSize}
      bold={bold}
      color={color}
      isTruncated={isTruncated}
      lineClamp={lineClamp}
    >
      {children}
    </S.P>
  );
}

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  fontSize: PropTypes.oneOf(['tiny', 'small', 'regular', 'large']),
  bold: PropTypes.bool,
  color: PropTypes.oneOf(['textPrime', 'textSecond']),
  isTruncated: PropTypes.bool,
  lineClamp: PropTypes.number,
};

Paragraph.defaultProps = {
  className: '',
  fontSize: 'regular',
  bold: false,
  color: 'textPrime',
  isTruncated: false,
  lineClamp: null,
};
