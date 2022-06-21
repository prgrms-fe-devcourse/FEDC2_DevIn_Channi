import { useRef, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
<<<<<<< HEAD
import {
  FollowBtn,
  TextLink,
  Avatar,
  Paragraph,
  ProfileUpdateBtn,
} from 'components';
=======
import { FollowBtn, Avatar, Paragraph, ProfileUpdateBtn } from 'components';
>>>>>>> develop
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
  const following = useSelector(state => state.follow.following);
  const profileRef = useRef();
  const authUser = useSelector(state => state.user.user);
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
    const followCheck = () => {
      following.map(({ _id }) => {
        return userFollowers.includes(_id)
          ? (setFollowId(_id), setIsFollow(true))
          : null;
      });
    };
    followCheck();
  }, [following, userFollowers]);
  
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
