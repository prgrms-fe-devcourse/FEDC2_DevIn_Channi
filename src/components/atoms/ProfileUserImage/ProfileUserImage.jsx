import PropTypes from 'prop-types';
import defaultImg from 'assets/images/default-profile.jpg';
import * as S from './style';

export function ProfileUserImage({ userImage }) {
  return <S.UserImage alt="" src={userImage || defaultImg} />;
}

ProfileUserImage.propTypes = {
  userImage: PropTypes.string,
};

ProfileUserImage.defaultProps = {
  userImage: null,
};
