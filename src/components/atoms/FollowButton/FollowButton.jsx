import * as S from './style';

export function FollowButton() {
    return <S.FollowButton onClick={() => console.log("follow")}>
        팔로우
    </S.FollowButton>
}