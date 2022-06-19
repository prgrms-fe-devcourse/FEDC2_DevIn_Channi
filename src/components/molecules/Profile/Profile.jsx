/* eslint-disable no-unused-vars */
import { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { ProfileUserImage, ProfileUserName, FollowBtn, ProfileUpdateBtn } from 'components';
import * as S from './style';


export function Profile({
  getCount,
  idx,
  userId,
  userImage,
  userName,
  isSearchData,
}) {
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
      // if (!isSearchData) {
      //   observer.observe(profileRef.current);
      // }
    }
  });
  return (
    <S.Profile ref={profileRef}>
      <ProfileUserImage userImage={userImage} size={3} />
      <ProfileUserName userName={userName} />
      {authUser._id === userId ? <ProfileUpdateBtn/>: <FollowBtn userId={userId} />}
    </S.Profile>
  );
}

Profile.propTypes = {
  getCount: PropTypes.func,
  idx: PropTypes.number,
  userId: PropTypes.string,
  userImage: PropTypes.string,
  userName: PropTypes.string.isRequired,
  isSearchData: PropTypes.bool,
};

Profile.defaultProps = {
  getCount: {},
  idx: 0,
  userId: null,
  userImage: '',
  isSearchData: false,
};
