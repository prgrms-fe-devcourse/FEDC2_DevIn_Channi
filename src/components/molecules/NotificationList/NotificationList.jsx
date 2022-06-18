import PropTypes from 'prop-types';
import { ProfileUserImage, ProfileUserName } from 'components';
import * as S from './style';

export function NotificationList({ userName, comment }) {
  return (
    <S.Container>
      <S.Content>
        <ProfileUserImage size={2.5} />
        <ProfileUserName userName={userName} />
        <span>{comment}</span>
      </S.Content>
    </S.Container>
  );
}

NotificationList.propTypes = {
  userName: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
};
