/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FollowModal, ProfileList } from 'components';
import { users } from 'api';

export function ProfileFollow({
  showModal,
  hideModal,
  followInfo,
  isFollower,
}) {
  const [followUserList, setFollowUserList] = useState([]);

  useEffect(() => {
    const followlist = [];
    followInfo.map(({ user, follower }) => {
      const userId = isFollower ? follower : user;
      const getUserApi = async () => {
        const getFollower = await users.getUser({ userId });
        followlist.push(getFollower);
        if (followlist.length === followInfo.length)
          setFollowUserList(followlist);
      };
      return getUserApi();
    });
  }, []);

  return (
    followUserList.length > 0 && (
      <FollowModal showModal={showModal} onHideModal={hideModal}>
        <ProfileList FollowUserList={followUserList} />
      </FollowModal>
    )
  );
}

ProfileFollow.propTypes = {
  showModal: PropTypes.bool.isRequired,
  hideModal: PropTypes.func.isRequired,
  followInfo: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
      follower: PropTypes.string.isRequired,
      createdAt: PropTypes.string,
      updateAt: PropTypes.string,
    }),
  ).isRequired,
  isFollower: PropTypes.bool.isRequired,
};
