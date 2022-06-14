import PropTypes from 'prop-types';
import * as S from './style';

export function FormBtn({ onClick, text }) {
  return <S.Button onClick={onClick}>{text}</S.Button>;
}

FormBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
