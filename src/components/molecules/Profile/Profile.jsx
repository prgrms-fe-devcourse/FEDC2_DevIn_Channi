import { useRef, useEffect } from "react";
import PropTypes from 'prop-types';
import { ProfileUserImage, ProfileUserName, FollowButton } from "components";
import * as S from './style'; 

export function Profile({getCount, idx, userImage, userName}) {
    const profileRef = useRef();

      useEffect(() => {
        if(profileRef.current && idx % 10 === 0) {
          const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if(entry.isIntersecting) {
                getCount(idx);
                observer.disconnect();
              }
            })
          }, {threshold: 0.1})
          observer.observe(profileRef.current);
        }
      }, [getCount, idx])
    
    return <S.Profile ref={profileRef}>
        <ProfileUserImage userImage={userImage}/>
        <ProfileUserName userName={userName}/>
        <FollowButton/>
    </S.Profile>
}

Profile.propTypes = {
  getCount: PropTypes.func.isRequired,
  idx: PropTypes.number.isRequired,
  userImage: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
}