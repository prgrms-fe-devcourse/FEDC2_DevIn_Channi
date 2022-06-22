import PropTypes from 'prop-types';
import { Span } from 'components';
import * as S from './style';

export function MenuItem({ children, type, to, onClick, isFirst, isLast }) {
  return (
    <>
      {type === 'link' && (
        <S.Link to={to} isFirst={isFirst} isLast={isLast}>
          <Span fontSize="small">{children}</Span>
        </S.Link>
      )}
      {type === 'button' && (
        <S.Btn
          type="button"
          onClick={onClick}
          isFirst={isFirst}
          isLast={isLast}
        >
          <Span fontSize="small">{children}</Span>
        </S.Btn>
      )}
    </>
  );
}

MenuItem.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['link', 'button']).isRequired,
  to: PropTypes.string,
  onClick: PropTypes.func,
  isFirst: PropTypes.bool,
  isLast: PropTypes.bool,
};

MenuItem.defaultProps = {
  to: '',
  onClick: null,
  isFirst: false,
  isLast: false,
};
