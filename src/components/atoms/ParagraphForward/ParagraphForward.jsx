import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import * as S from './style';

export const ParagraphForward = forwardRef(function Paragraph(
  { children, className, fontSize, bold, color, isTruncated, lineClamp },
  ref,
) {
  return (
    <S.P
      ref={ref}
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
});

ParagraphForward.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  fontSize: PropTypes.oneOf(['tiny', 'small', 'regular', 'large']),
  bold: PropTypes.bool,
  color: PropTypes.oneOf(['textPrime', 'textSecond']),
  isTruncated: PropTypes.bool,
  lineClamp: PropTypes.number,
};

ParagraphForward.defaultProps = {
  className: '',
  fontSize: 'regular',
  bold: false,
  color: 'textPrime',
  isTruncated: false,
  lineClamp: null,
};
