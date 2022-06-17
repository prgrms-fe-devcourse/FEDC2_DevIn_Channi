import PropTypes from 'prop-types';
import * as S from './style';

export function FollowBtn({userId}) {
    const onClick = () => {
        console.log(userId)
    }

    return <S.FollowBtn onClick={onClick}>
        팔로우
    </S.FollowBtn>
}

FollowBtn.propTypes = {
    userId: PropTypes.string,
};

FollowBtn.defaultProps = {
    userId: null,
}
