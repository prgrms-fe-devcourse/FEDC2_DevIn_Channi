import { useState } from 'react';
import { useSelector } from 'react-redux';
import { PostType, AuthorType, CommentsType } from 'types';
import { CommentForm, CommentThread, Span } from 'components';
import { useCookie } from 'hooks';
import { commentApi, notification } from 'api';
import * as S from './style';

const useComments = ({ rawComments, postId, authorId }) => {
  const [comments, setComments] = useState(() => {
    return [...rawComments].reverse();
  });
  const [commentLimit, setCommentLimit] = useState(3);

  const { getCookie } = useCookie();

  const createComment = async ({ comment }) => {
    const token = getCookie();
    try {
      const createdComment = await commentApi.create({
        token,
        data: {
          comment,
          postId,
        },
      });
      setComments([createdComment, ...comments]);
      setCommentLimit(commentLimit + 1);
      await notification.createNotification({
        token,
        data: {
          notificationType: 'COMMENT',
          notificationTypeId: createdComment._id,
          userId: authorId,
          postId,
        },
      });
    } catch (e) {
      console.error(e.message);
    }
  };

  const deleteComment = async ({ commentId }) => {
    const token = getCookie();
    try {
      const deletedComment = await commentApi.delete({
        token,
        data: {
          commentId,
        },
      });
      setComments(
        comments.filter(comment => comment._id !== deletedComment._id),
      );
      setCommentLimit(commentLimit - 1);
    } catch (e) {
      console.error(e.massage);
    }
  };

  const viewAllComments = () => {
    setCommentLimit(comments.length);
  };

  return {
    comments,
    commentLimit,
    createComment,
    deleteComment,
    viewAllComments,
  };
};

export function Comments({ post, comments: rawComments, author }) {
  const { isLoggedIn } = useSelector(state => state.user);
  const {
    comments,
    commentLimit,
    createComment,
    deleteComment,
    viewAllComments,
  } = useComments({ rawComments, postId: post._id, authorId: author._id });

  const onViewMoreBtnClick = () => {
    viewAllComments();
  };

  return (
    <S.Section>
      {isLoggedIn && <CommentForm createComment={createComment} />}
      {comments.length > 0 && (
        <ul>
          {comments.map(
            (comment, idx) =>
              idx < commentLimit && (
                <S.Li key={comment._id}>
                  <CommentThread
                    comment={comment}
                    deleteComment={deleteComment}
                  />
                </S.Li>
              ),
          )}
        </ul>
      )}
      {comments.length > commentLimit && (
        <S.StyledTextBtn type="button" onClick={onViewMoreBtnClick}>
          <Span fontSize="small" color="textSecond">
            댓글 더 보기
          </Span>
        </S.StyledTextBtn>
      )}
    </S.Section>
  );
}

Comments.propTypes = {
  post: PostType.isRequired,
  author: AuthorType.isRequired,
  comments: CommentsType.isRequired,
};
