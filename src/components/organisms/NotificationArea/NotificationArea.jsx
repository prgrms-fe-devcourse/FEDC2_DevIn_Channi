import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { NotificationList } from 'components';
import { useCookie } from 'hooks';
import { notification } from 'api';
import * as S from './style';

const commentList = {
  COMMENT: '님이 회원님의 개시물에 댓글을 달았어요.',
  FOLLOW: '님이 회원님을 팔로우하셨어요.',
  LIKE: '님이 회원님의 개시물에 좋아요를 눌렀어요.',
};

export function NotificationArea({ notifications }) {
  const navigate = useNavigate();
  const { getCookie } = useCookie();

  const checkType = noti => {
    const { post, comment, like } = noti;

    if (!post) return 'FOLLOW';
    if (comment) return 'COMMENT';
    if (like) return 'LIKE';
  };

  const onClick = async ({ type, id }) => {
    await notification.setNotificationAsRead({ token: getCookie() });

    if (type === 'COMMENT' || type === 'LIKE') {
      console.log('comment');
    }

    if (type === 'FOLLOW') {
      navigate(`/profiles/${id}`);
    }
  };

  return (
    <S.Container>
      <h1>알림</h1>

      {notifications.length ? (
        notifications.map(noti => {
          const {
            author: { fullName, _id },
          } = noti;

          const type = checkType(noti);
          return (
            <NotificationList
              userName={fullName}
              comment={commentList[type]}
              onClick={() => onClick({ type, id: _id })}
            />
          );
        })
      ) : (
        <S.Paragraph>새로운 소식이 없습니다</S.Paragraph>
      )}
    </S.Container>
  );
}

NotificationArea.propTypes = {
  notifications: PropTypes.array.isRequired,
};
