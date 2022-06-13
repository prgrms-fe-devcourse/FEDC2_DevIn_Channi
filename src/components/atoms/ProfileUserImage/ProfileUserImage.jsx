import defaultImg from "assets/images/default-profile.jpg";
import * as S from './style';

export function ProfileUserImage(user) {
  let { userImage } = user;
  if(!userImage) userImage = defaultImg
  return (
    <S.UserImage alt="" src={userImage}/>
  );
}
