import { ProfileItem } from 'components';
import * as S from './style';

export function ProfileInfo() {
  const profileItem = [
    {
      itemName: '게시물',
      itemNum: '100',
    },
    {
      itemName: '팔로워',
      itemNum: '100',
    },
    {
      itemName: '팔로우',
      itemNum: '100',
    },
  ];
  return (
    <S.ProfileInfo>
      {profileItem.map(({ itemName, itemNum }) => {
        return <ProfileItem itemName={itemName} itemNum={itemNum} />;
      })}
    </S.ProfileInfo>
  );
}
