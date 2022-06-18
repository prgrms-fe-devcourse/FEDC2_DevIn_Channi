import PropTypes from 'prop-types';
import { TextBtn, Span } from 'components';
import * as S from './style';

export function PostFooter({ likesCount, commentsCount, onCommentBtnClick }) {
  const onLikeBtnClick = () => {
    // 1. create like / delete like
    // 2. update likesCount
    // 3. create notifications
  };

  return (
    <S.Footer>
      <S.Flex>
        <S.StyledIconBtn
          type="button"
          onClick={onLikeBtnClick}
          icon="heart"
          hoverColor="red"
        />
        {likesCount > 0 && (
          <Span fontSize="small" color="textSecond">
            {likesCount}
          </Span>
        )}
      </S.Flex>
      <TextBtn type="button" onClick={onCommentBtnClick}>
        <Span fontSize="small" color="textSecond">
          {commentsCount > 0 ? `댓글 ${commentsCount}개` : '댓글 보기'}
        </Span>
      </TextBtn>
    </S.Footer>
  );
}

PostFooter.propTypes = {
  likesCount: PropTypes.number.isRequired,
  commentsCount: PropTypes.number.isRequired,
  onCommentBtnClick: PropTypes.func.isRequired,
};
