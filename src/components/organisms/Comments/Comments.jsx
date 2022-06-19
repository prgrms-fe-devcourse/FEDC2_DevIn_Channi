import { useState } from 'react';
import PropTypes from 'prop-types';
import { CommentForm, CommentThread, TextBtn, Span } from 'components';
import * as S from './style';

export function Comments({ comments, author }) {
  const [commentLimit, setCommnentLimit] = useState(3);
  const onViewMoreBtnClick = () => {
    // 처음에 댓글 3개만 -> 버튼 누르면 다 보기
    // 1. set CommentLimit(comments.length)
    // 2-1. 더보기 버튼 없애거나
    // 2-2. 작성하기 버튼으로 변경 -> 댓글 input focus
  };

  return (
    <S.Section>
      <CommentForm author={author} />
      {comments.length > 0 && (
        <ul>
          {comments.map(
            (comment, idx) =>
              idx < commentLimit && (
                <S.Li key={comment._id}>
                  <CommentThread comment={comment} />
                </S.Li>
              ),
          )}
        </ul>
      )}

      <TextBtn type="button" onClick={onViewMoreBtnClick}>
        <Span fontSize="small" color="textSecond">
          댓글 더 보기
        </Span>
      </TextBtn>
    </S.Section>
  );
}

Comments.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      comment: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      author: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        fullName: PropTypes.string.isRequired,
        image: PropTypes.string,
      }).isRequired,
    }),
  ).isRequired,
  author: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    image: PropTypes.string,
  }).isRequired,
};
