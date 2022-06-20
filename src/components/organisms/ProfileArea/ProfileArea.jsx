import { Profile, ProfileInfo } from 'components';
import * as S from './style'

export function ProfileArea() {
  return (
    <S.ProfileArea>
      <S.ProfileHeader>
      <Profile userName="Parkinhwa"/>
      </S.ProfileHeader>
      <ProfileInfo />
    </S.ProfileArea>
  );
}
