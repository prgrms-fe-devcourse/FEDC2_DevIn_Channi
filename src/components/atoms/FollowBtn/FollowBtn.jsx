/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { follow } from 'api';
import { useCookie } from 'hooks';
import { addFollowing, removeFollowing } from 'store';
import * as S from './style';

export function FollowBtn({ userId, isFollow, followId }) {
  const [isFollowing, setIsFollowing] = useState(isFollow);
  const [newFollowId, setNewFollowId] = useState(followId);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  const { getCookie } = useCookie();

  useEffect(() => {
    setIsFollowing(isFollow);
  }, [isFollow]);

  const onFollow = () => {
    if (isLoggedIn && !isFollowing) {
      setIsFollowing(true);
      const token = getCookie();
      const followApi = async () => {
        const followInfo = await follow.follow({ token, userId });
        dispatch(addFollowing(followInfo));
        if (!newFollowId) setNewFollowId(followInfo._id);
        return followInfo;
      };
      followApi();
    } else {
      window.location.href = '/signin';
    }
  };

  const onUnFollow = () => {
    if (isLoggedIn && isFollowing && newFollowId) {
      setIsFollowing(false);
      const token = getCookie();
      const unfollowApi = async () => {
        const unFollowInfo = await follow.unfollow({ token, id: newFollowId });
        dispatch(removeFollowing(unFollowInfo._id));
        return unFollowInfo;
      };
      unfollowApi();
    }
  };

  return (
    <div>
      {isFollowing ? (
        <S.unFollowBtn type="button" onClick={onUnFollow}>
          팔로잉
        </S.unFollowBtn>
      ) : (
        <S.FollowBtn type="button" onClick={onFollow}>
          팔로우
        </S.FollowBtn>
      )}
    </div>
  );
}

FollowBtn.propTypes = {
  userId: PropTypes.string.isRequired,
  isFollow: PropTypes.bool.isRequired,
  followId: PropTypes.string.isRequired,
};
