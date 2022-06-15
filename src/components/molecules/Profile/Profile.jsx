import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ProfileUserImage, ProfileUserName, FollowButton } from 'components';
import * as S from './style';

export function Profile({ getCount, idx, userImage, userName, isSearchData }) {
  const profileRef = useRef();

  useEffect(() => {
    if (profileRef.current && idx % 10 === 0) {
      const observer = new IntersectionObserver(
        (entries) => {
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
  return (
    <S.Profile ref={profileRef}>
      <ProfileUserImage userImage={userImage} />
      <ProfileUserName userName={userName} />
      <FollowButton />
    </S.Profile>
  );
}

Profile.propTypes = {
  getCount: PropTypes.func,
  idx: PropTypes.number,
  userImage: PropTypes.string,
  userName: PropTypes.string.isRequired,
  isSearchData: PropTypes.bool,
};

Profile.defaultProps = {
  getCount: {},
  idx: 0,
  userImage: '',
  isSearchData: false,
};
