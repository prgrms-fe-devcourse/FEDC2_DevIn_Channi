import PropTypes from 'prop-types';
import * as S from './style';

export function WrapperLink({
  children,
  type,
  to,
  href,
  target,
  rel,
  borderRadius,
}) {
  // borderRadius 확인 필요
  // 작동 문제 X -> but 에러 메세지

  return (
    <>
      {type === 'link' && (
        <S.StyledLink to={to} borderRadius={borderRadius}>
          {children}
        </S.StyledLink>
      )}
      {type === 'anchor' && (
        <S.A href={href} borderRadius={borderRadius} target={target} rel={rel}>
          {children}
        </S.A>
      )}
    </>
  );
}

WrapperLink.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['link', 'anchor']).isRequired,
  to: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string,
  borderRadius: PropTypes.string,
};

WrapperLink.defaultProps = {
  to: '',
  href: '',
  target: '',
  rel: '',
  borderRadius: '',
};
