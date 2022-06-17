import PropTypes from 'prop-types';
import * as S from './style';

export function TextLink({ children, className, type, to, href, target, rel }) {
  return (
    <>
      {type === 'link' && (
        <S.StyledLink className={className} to={to}>
          {children}
        </S.StyledLink>
      )}
      {type === 'anchor' && (
        <S.A className={className} href={href} target={target} rel={rel}>
          {children}
        </S.A>
      )}
    </>
  );
}

TextLink.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  type: PropTypes.oneOf(['link', 'anchor']).isRequired,
  to: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string,
};

TextLink.defaultProps = {
  className: '',
  to: '',
  href: '',
  target: '',
  rel: '',
};
