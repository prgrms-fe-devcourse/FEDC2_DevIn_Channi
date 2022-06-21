import { NotificationList } from 'components';
import * as S from './style';

const commentList = {
  COMMENT: '님이 회원님의 개시물에 댓글을 달았어요.',
  FOLLOW: '님이 회원님을 팔로우하셨어요.',
  LIKE: '님이 회원님의 개시물에 좋아요를 눌렀어요.',
};

export function NotificationArea() {
  return (
    <S.Container>
      <h1>알림</h1>
      <NotificationList
        userName="Yeummy-skkkk"
        comment={commentList['COMMENT']}
      />
      <NotificationList userName="염상권" comment={commentList['FOLLOW']} />
      <NotificationList userName="박인화" comment={commentList['LIKE']} />
      <NotificationList userName="김가연" comment={commentList['COMMENT']} />
      <NotificationList userName="김민기" comment={commentList['FOLLOW']} />
    </S.Container>
  );
}
