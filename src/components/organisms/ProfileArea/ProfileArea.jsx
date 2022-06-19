import { Profile, ProfileInfo } from 'components';
import * as S from './style'

export function ProfileArea() {
  return (
    <S.ProfileArea>
      <Profile userName="Parkinhwa"/>
      <ProfileInfo />
    </S.ProfileArea>
  );
}
