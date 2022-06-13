import { useRef, useEffect } from "react";
import { ProfileUserImage, ProfileUserName, FollowButton } from "components";
import * as S from './style'; 

export function Profile(user) {
    const {getCount, idx, userImage, userName} = user;
    const profileRef = useRef();

    const observer = new IntersectionObserver((entries, io) => {
        entries.forEach(entry => {
          if(entry.isIntersecting) {
            io.unobserve(entry.target);
            getCount(idx);
            observer.disconnect();
          }
        })
      }, {threshold: 0.1})

      useEffect(() => {
        if(profileRef.current && idx % 10 === 0) {
          observer.observe(profileRef.current);
        }
      }, [])
    
    return <S.Profile ref={profileRef}>
        <ProfileUserImage userImage={userImage}/>
        <ProfileUserName userName={userName}/>
        <FollowButton/>
    </S.Profile>
}