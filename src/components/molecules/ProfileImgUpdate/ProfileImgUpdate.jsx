import { ProfileUserImage, UserImgUpdateIcon } from 'components';
import * as S from './style';

export function ProfileImgUpdate() {
  return (
    <S.ProfileImgUpdate>
      <UserImgUpdateIcon />
      <ProfileUserImage size={7.5} />
    </S.ProfileImgUpdate>
  );
}
