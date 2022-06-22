import PropTypes from 'prop-types';
import { TextLink, Avatar, Paragraph } from 'components';
import * as S from './style';

export function AuthProfile({ userId, userImage, userName }) {
  return (
    <S.AuthProfile>
      <S.Wrapper>
        <Avatar src={userImage} alt="" />
        <TextLink type="link" to={`/profiles/${userId}`}>
          <Paragraph bold isTruncated lineClamp={1}>
            {userName}
          </Paragraph>
        </TextLink>
      </S.Wrapper>
    </S.AuthProfile>
  );
}
AuthProfile.propTypes = {
  userId: PropTypes.string.isRequired,
  userImage: PropTypes.string,
  userName: PropTypes.string.isRequired,
};

AuthProfile.defaultProps = {
  userImage: null,
};
