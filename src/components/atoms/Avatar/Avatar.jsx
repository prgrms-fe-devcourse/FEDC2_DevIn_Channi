import PropTypes from 'prop-types';
import defaultProfile from 'assets/images/default-profile.jpg';
import * as S from './style';

export function Avatar({ className, src, alt, size }) {
  return (
    <S.ImgContainer className={className} size={size}>
      <S.Img src={src || defaultProfile} alt={alt} loading="lazy" />;
    </S.ImgContainer>
  );
}

Avatar.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['2.5rem', '3rem', '5rem']),
};

Avatar.defaultProps = {
  className: '',
  src: '',
  size: '2.5rem',
};
