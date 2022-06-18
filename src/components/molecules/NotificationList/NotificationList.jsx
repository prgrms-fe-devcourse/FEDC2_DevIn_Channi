import PropTypes from 'prop-types';
import { ProfileUserImage, ProfileUserName } from 'components';
import * as S from './style';

export function NotificationList({ userName }) {
  return (
    <S.Container>
      <ProfileUserImage size={2.5} />
      <ProfileUserName userName={userName} />
      <span>님이 회원님의 게시글에 댓글을 달았어요.</span>
    </S.Container>
  );
}

NotificationList.propTypes = {
  userName: PropTypes.string.isRequired,
};
