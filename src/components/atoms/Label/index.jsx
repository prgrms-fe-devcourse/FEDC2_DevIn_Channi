import PropTypes from 'prop-types';
import * as S from './style';

export function Label({ content, width, height }) {
  return (
    <S.Label width={width} height={height}>
      {content}
    </S.Label>
  );
}

Label.defaultProps = {
  width: 'auto',
  height: 'auto',
};

Label.propTypes = {
  content: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
};
