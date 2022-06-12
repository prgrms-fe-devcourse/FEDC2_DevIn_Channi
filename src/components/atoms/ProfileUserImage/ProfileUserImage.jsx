import * as S from './style';

export function ProfileUserImage(user) {
  const { userImage } = user;
  return (
    <S.UserImage>
      {/* img 없을 때 사용자 아이콘 있을 때 이미지 */}
      <img alt="" src={userImage} />
    </S.UserImage>
  );
}
