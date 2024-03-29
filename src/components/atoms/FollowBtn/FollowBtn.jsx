import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { follow, notification } from 'api';
import { useCookie } from 'hooks';
import { addFollowing, removeFollowing } from 'store';
import * as S from './style';

export function FollowBtn({ userId, isFollow, followId }) {
  const [isFollowing, setIsFollowing] = useState(isFollow);
  const [newFollowId, setNewFollowId] = useState(followId);
  const [isDisable, setIsDisable] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  const { getCookie } = useCookie();

  useEffect(() => {
    setIsFollowing(isFollow);
  }, [isFollow]);

  useEffect(() => {
    if(followId && !newFollowId) {
      setNewFollowId(followId);
    }
  }, [followId, newFollowId]);

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
            userId,
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
    if (isLoggedIn && isFollowing && newFollowId) {
      setIsFollowing(false);
      const token = getCookie();
      const unfollowApi = async () => {
        const unFollowInfo = await follow.unfollow({ token, id: newFollowId });
        if (unFollowInfo) dispatch(removeFollowing(unFollowInfo._id));
        setNewFollowId('');
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
