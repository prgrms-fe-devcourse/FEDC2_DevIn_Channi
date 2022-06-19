import PropTypes from 'prop-types';
import { ProfileItem } from 'components';
import * as S from './style';

export function ProfileInfo({ posts, followers, following }) {
  console.log(posts, followers, following)
  const profileItem = [
    {
      id: 1,
      itemName: '게시물',
      itemNum: posts,
    },
    {
      id: 2,
      itemName: '팔로워',
      itemNum: followers,
    },
    {
      id: 3,
      itemName: '팔로우',
      itemNum: following,
    },
  ];
  return (
    <S.ProfileInfo>
      {profileItem.map(({ id, itemName, itemNum }) => {
        return <ProfileItem key={id} itemName={itemName} itemNum={itemNum} />;
      })}
    </S.ProfileInfo>
  );
}

ProfileInfo.propTypes = {
  posts: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  following: PropTypes.number.isRequired,
};
