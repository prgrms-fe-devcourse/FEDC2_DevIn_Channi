/* eslint-disable no-unused-vars */
import { useRef, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  ProfileUserImage,
  ProfileUserName,
  FollowBtn,
  Avatar,
  Paragraph,
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
  const following = useSelector(state => state.follow.following);
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
        <Avatar src={userImage} />
        <Paragraph fontSize="small" bold isTuncated lineClamp={1}>
          {userName}
        </Paragraph>
      </S.Wrapper>
      <FollowBtn userId={userId} isFollow={isFollow} followId={followId} />
    </S.Profile>
  );
}

Profile.propTypes = {
  getCount: PropTypes.func,
  idx: PropTypes.number,
  userId: PropTypes.string.isRequired,
  userImage: PropTypes.string,
  userName: PropTypes.string.isRequired,
  userFollowers: PropTypes.arrayOf(PropTypes.string).isRequired,
  isSearchData: PropTypes.bool,
};

Profile.defaultProps = {
  getCount: {},
  idx: 0,
  userImage: '',
  isSearchData: false,
};
