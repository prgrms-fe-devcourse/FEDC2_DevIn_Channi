import PropTypes from 'prop-types';
import * as S from './style';

export function SubmitBtn({ onClick }) {
  return <S.Button onClick={onClick}>Submit</S.Button>;
}

SubmitBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};
