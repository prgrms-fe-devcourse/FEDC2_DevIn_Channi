import { ProfileUserImage, ProfileUserName, FollowButton } from "components";
import * as S from './style'; 

export function Profile(user) {
    const {userImage, userName} = user;
    return <S.Profile>
        <ProfileUserImage userImage={userImage}/>
        <ProfileUserName userName={userName}/>
        <FollowButton/>
    </S.Profile>
}