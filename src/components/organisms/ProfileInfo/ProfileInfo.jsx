/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ProfileItem, ProfileFollow } from 'components';
import * as S from './style';

export function ProfileInfo({ userId, posts, followers, following }) {
  const [isModalShow, setIsModalShow] = useState(false);
  const [followInfo, setFollowInfo] = useState('');
  const [isFollower, setIsFollower] = useState('');

  useEffect(() => {
    setIsModalShow(false);
  }, [userId])

  const followerModal = followerData => {
    setIsModalShow(true);
    setFollowInfo(followerData);
    setIsFollower(true);
  };

  const followingModal = followingData => {
    setIsModalShow(true);
    setFollowInfo(followingData);
    setIsFollower(false);
  };

  const onHideModal = () => {
    setIsModalShow(false);
  };

  const profileItem = [
    {
      id: 1,
      isTextLink: false,
      itemName: '게시물',
      itemNum: posts.length,
    },
    {
      id: 2,
      isTextLink: true,
      itemName: '팔로워',
      itemNum: followers.length,
    },
    {
      id: 3,
      isTextLink: true,
      itemName: '팔로우',
      itemNum: following.length,
    },
  ];
  return (
    <>
      <S.ProfileInfo>
        {profileItem.map(({ id, isTextLink, itemName, itemNum }) => {
          return isTextLink && itemNum ? (
            <div
              key={id}
              role="button"
              tabIndex={0}
               onClick={() =>
                itemName === '팔로워'
                  ? followerModal(followers)
                  : followingModal(following)
              }
            >
              <ProfileItem itemName={itemName} itemNum={itemNum} />
            </div>
          ) : (
            <ProfileItem key={id} itemName={itemName} itemNum={itemNum} />
          );
        })}
      </S.ProfileInfo>
      {isModalShow && (
        <ProfileFollow
          showModal={isModalShow}
          hideModal={onHideModal}
          followInfo={followInfo}
          isFollower={isFollower}
        />
      )}
    </>
  );
}

ProfileInfo.propTypes = {
  userId: PropTypes.string.isRequired,
  posts: PropTypes.arrayOf(PropTypes.string).isRequired,
  followers: PropTypes.arrayOf(
    PropTypes.objectOf({
      _id: PropTypes.string,
      user: PropTypes.string,
      follower: PropTypes.string,
      createAt: PropTypes.string,
      updateAt: PropTypes.string,
    }),
  ).isRequired,
  following: PropTypes.arrayOf(
    PropTypes.objectOf({
      _id: PropTypes.string,
      user: PropTypes.string,
      follower: PropTypes.string,
      createAt: PropTypes.string,
      updateAt: PropTypes.string,
    }),
  ).isRequired,
};
