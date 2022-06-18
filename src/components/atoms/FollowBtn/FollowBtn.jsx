/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { follow } from 'api';
import { useCookie } from 'hooks';
import { setFollowing } from 'store';
import * as S from './style';

export function FollowBtn({ userId, isFollow, followId }) {
  const [isFollowing, setIsFollowing] = useState(isFollow);
  const [followingInfo, setFollowingInfo] = useState([]);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  const { getCookie } = useCookie();

  // useEffect(() => {
  //   dispatch(setFollowing(followingInfo));
  // }, [dispatch, followingInfo]);

  useEffect(() => {
    setIsFollowing(isFollow);
  }, [isFollow]);

  const onFollow = () => {
    if (isLoggedIn && !isFollowing) {
      const token = getCookie();
      const followApi = async () => {
        const followInfo = await follow.follow({ token, userId });
        setFollowingInfo(followInfo);
        setIsFollowing(true);
        return followInfo;
      };
      followApi();
    } else {
      window.location.href = '/signin';
    }
  };

  const onUnFollow = () => {
    if (isLoggedIn && isFollowing) {
      const token = getCookie();
      const unfollowApi = async () => {
        const unFollowInfo = await follow.unfollow({ token, id: followId });
        setFollowingInfo(unFollowInfo);
        setIsFollowing(false);
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
