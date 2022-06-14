import PropTypes from 'prop-types';
import * as S from './style';

export function ProfileUserName({ userName }) {
  return <S.UserName>{userName}</S.UserName>;
}

ProfileUserName.propTypes = {
  userName: PropTypes.string.isRequired,
};
