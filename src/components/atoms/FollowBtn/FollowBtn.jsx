import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { follow, notification } from 'api';
import { useCookie } from 'hooks';
import { addFollowing, removeFollowing } from 'store';
import * as S from './style';

export function FollowBtn({ userId, isFollow, followId }) {
  console.log(isFollow);
  const [isFollowing, setIsFollowing] = useState(isFollow);
  const [newFollowId, setNewFollowId] = useState(followId);
  const [isDisable, setIsDisable] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  const following = useSelector(state => state.follow.following);

  const { getCookie } = useCookie();

  useEffect(() => {
    setIsFollowing(isFollow);
  }, [isFollow]);

  // useEffect(() => {
  //   following.map(({ user, _id }) => {
  //     console.log(user, _id, userId);
  //     return user === userId
  //       ? (setNewFollowId(_id), setIsFollowing(true))
  //       : false;
  //   });
  // }, [following, userId]);

  useEffect(() => {
    setNewFollowId(followId);
  }, [followId]);

  const onFollow = () => {
    setIsDisable(true);
    if (isLoggedIn && !isFollowing && !newFollowId) {
      setIsFollowing(true);
      const token = getCookie();
      const followApi = async () => {
        const followInfo = await follow.follow({ token, userId });
        await notification.createNotification({
          token,
          data: {
            notificationType: 'FOLLOW',
            notificationTypeId: followInfo._id,
            userId: followInfo.folower,
            postId: null,
          },
        });
        if (followInfo) dispatch(addFollowing(followInfo));
        setNewFollowId(followInfo._id);
        setIsDisable(false);
        return followInfo;
      };
      followApi();
    } else {
      navigate('/signin');
    }
  };

  const onUnFollow = () => {
    setIsDisable(true);
    console.log(isLoggedIn, isFollowing, newFollowId);
    if (isLoggedIn && isFollowing && newFollowId) {
      setIsFollowing(false);
      const token = getCookie();
      const unfollowApi = async () => {
        const unFollowInfo = await follow.unfollow({ token, id: newFollowId });
        if (unFollowInfo) dispatch(removeFollowing(unFollowInfo._id));
        setIsDisable(false);
        return unFollowInfo;
      };
      unfollowApi();
    }
  };

  return (
    <S.FollowBtn
      type="button"
      onClick={isFollowing ? onUnFollow : onFollow}
      disabled={isDisable}
      isFollowing={isFollowing}
    >
      {isFollowing ? '팔로잉' : '팔로우'}
    </S.FollowBtn>
  );
}

FollowBtn.propTypes = {
  userId: PropTypes.string.isRequired,
  isFollow: PropTypes.bool.isRequired,
  followId: PropTypes.string.isRequired,
};
