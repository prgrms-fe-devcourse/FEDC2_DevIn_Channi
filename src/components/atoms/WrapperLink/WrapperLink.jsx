import PropTypes from 'prop-types';
import * as S from './style';

export function WrapperLink({
  children,
  className,
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
        <S.Link className={className} to={to} borderRadius={borderRadius}>
          {children}
        </S.Link>
      )}
      {type === 'anchor' && (
        <S.A
          className={className}
          href={href}
          borderRadius={borderRadius}
          target={target}
          rel={rel}
        >
          {children}
        </S.A>
      )}
    </>
  );
}

WrapperLink.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  type: PropTypes.oneOf(['link', 'anchor']).isRequired,
  to: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string,
  borderRadius: PropTypes.string,
};

WrapperLink.defaultProps = {
  className: '',
  to: '',
  href: '',
  target: '',
  rel: '',
  borderRadius: '',
};
