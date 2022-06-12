import * as S from './style';

export function ProfileUserName(user) {
  const {userName} = user
  return <S.UserName>{userName}</S.UserName>
}
