import PropTypes from 'prop-types';
import * as S from './style';

export function FormBtn({ text }) {
  return <S.Button>{text}</S.Button>;
}

FormBtn.propTypes = {
  text: PropTypes.string.isRequired,
};
