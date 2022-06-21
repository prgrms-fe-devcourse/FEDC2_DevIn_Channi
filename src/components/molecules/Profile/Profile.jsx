import { useRef, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  FollowBtn,
  TextLink,
  Avatar,
  Paragraph,
  ProfileUpdateBtn,
} from 'components';
import * as S from './style';

export function Profile({
  getCount,
  idx,
  userId,
  userImage,
  userName,
  userFollowers,
  isSearchData,
}) {
  const [isFollow, setIsFollow] = useState(false);
  const [followId, setFollowId] = useState('');
  const [userFollower, setUserFollower] = useState(userFollowers);
  const following = useSelector(state => state.follow.following);
  const authUser = useSelector(state => state.user.user);
  const profileRef = useRef();

  useEffect(() => {
    if (profileRef.current && idx % 10 === 0) {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              getCount(idx);
              observer.disconnect();
            }
          });
        },
        { threshold: 1 },
      );
      if (!isSearchData) {
        observer.observe(profileRef.current);
      }
    }
  });

  useEffect(() => {
    console.log('following:', following, 'userFollowers:', userFollowers);
    if (typeof userFollowers[0] === 'object') {
      const follower = [];
      userFollowers.map(({ _id }) => {
        follower.push(_id);
        return follower;
      });
      setUserFollower(follower);
    }
    if (userFollower.length > 0) {
      following.map(({ _id }) => {
        // userFollowers에 id만 들어있지않음
        return userFollower.includes(_id)
          ? (setFollowId(_id), setIsFollow(true))
          : null;
      });
    } else {
      following.map(({ user }) => {
        console.log(user, userId);
        return user === userId
          ? (setFollowId(user), setIsFollow(true))
          : null;
      });
    }
  }, [userId, following, userFollower, userFollowers]);

  return (
    <S.Profile ref={profileRef}>
      <S.Wrapper>
        <Avatar src={userImage} alt="" />
        <TextLink type="link" to={`/profiles/${userId}`}>
          <Paragraph bold isTruncated lineClamp={1}>
            {userName}
          </Paragraph>
        </TextLink>
      </S.Wrapper>
      {authUser._id === userId ? (
        <ProfileUpdateBtn />
      ) : (
        <FollowBtn userId={userId} isFollow={isFollow} followId={followId} />
      )}
    </S.Profile>
  );
}
Profile.propTypes = {
  getCount: PropTypes.func,
  idx: PropTypes.number,
  userId: PropTypes.string.isRequired,
  userImage: PropTypes.string,
  userName: PropTypes.string.isRequired,
  userFollowers: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
      follower: PropTypes.string.isRequired,
      createdAt: PropTypes.string,
      updateAt: PropTypes.string,
    }),
  ),
  isSearchData: PropTypes.bool,
};
Profile.defaultProps = {
  getCount: () => {},
  idx: 0,
  userImage: '',
  userFollowers: [],
  isSearchData: false,
};
