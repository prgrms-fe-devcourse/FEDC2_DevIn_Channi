import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { CommentType } from 'types';
import {
  IconBtn,
  MenuItem,
  WrapperLink,
  Avatar,
  Time,
  Paragraph,
  Span,
} from 'components';
import * as S from './style';

export function CommentThread({ comment, deleteComment }) {
  const [isMyComment, setIsMyComment] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const {
    user: { _id: userId },
    isLoggedIn,
  } = useSelector(state => state.user);

  useEffect(() => {
    if (isLoggedIn && comment.author._id === userId) {
      setIsMyComment(true);
    }
  }, [isLoggedIn, userId, comment]);

  const onMoreActsBtnClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const onMoreActsBtnBlur = () => {
    setTimeout(() => {
      setIsMenuOpen(false);
    }, 150);
  };

  const onCommentDeleteBtnClick = async () => {
    await deleteComment({
      commentId: comment._id,
    });
  };

  return (
    <S.Article>
      <WrapperLink
        type="link"
        to={`/profiles/${comment.author._id}`}
        borderRadius="50%"
      >
        <Avatar src={comment.author.image} alt="" />
      </WrapperLink>
      <S.Flex>
        <div>
          <S.StyledTextLink type="link" to={`/profiles/${comment.author._id}`}>
            <Span fontSize="small" bold>
              {comment.author.fullName}
            </Span>
          </S.StyledTextLink>
          <Time createdAt={comment.createdAt} />
        </div>
        <Paragraph fontSize="small" color="textSecond">
          {comment.comment}
        </Paragraph>
      </S.Flex>
      <div>
        {isMyComment && (
          <IconBtn
            type="button"
            onClick={onMoreActsBtnClick}
            onBlur={onMoreActsBtnBlur}
            icon="menus"
          />
        )}
      </div>

      {isMyComment && isMenuOpen && (
        <S.StyledMenu>
          <MenuItem
            type="button"
            onClick={onCommentDeleteBtnClick}
            isFirst
            isLast
          >
            삭제
          </MenuItem>
        </S.StyledMenu>
      )}
    </S.Article>
  );
}

CommentThread.propTypes = {
  comment: CommentType.isRequired,
  deleteComment: PropTypes.func.isRequired,
};
