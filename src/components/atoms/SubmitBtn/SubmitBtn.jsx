import PropTypes from 'prop-types';
import * as S from './style';

export function SubmitBtn({ onClick, text }) {
  return <S.Button onClick={onClick}>{text}</S.Button>;
}

SubmitBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
