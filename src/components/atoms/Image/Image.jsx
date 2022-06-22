import PropTypes from 'prop-types';
import * as S from './style';

export function Image({
  src,
  alt,
  width,
  height,
  aspectRatio,
  objectFit,
  onError,
}) {
  return (
    <S.ImgConatiner width={width} height={height} aspectRatio={aspectRatio}>
      <S.Img
        src={src}
        alt={alt}
        loading="lazy"
        objectFit={objectFit}
        onError={onError}
      />
    </S.ImgConatiner>
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  aspectRatio: PropTypes.oneOf(['4 / 3', '16 / 9']),
  objectFit: PropTypes.oneOf(['fill', 'contain', 'cover']),
  onError: PropTypes.func,
};

Image.defaultProps = {
  width: '',
  height: '',
  aspectRatio: '',
  objectFit: 'cover',
  onError: null,
};
