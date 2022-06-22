import PropTypes from 'prop-types';
import defaultImg from 'assets/images/default-profile.jpg';
import * as S from './style';

export function ProfileUserImage({ userImage, size }) {
  return <S.UserImage alt="" src={userImage || defaultImg} size={size} />;
}

ProfileUserImage.propTypes = {
  userImage: PropTypes.string,
  size: PropTypes.number.isRequired,
};

ProfileUserImage.defaultProps = {
  userImage: null,
};
