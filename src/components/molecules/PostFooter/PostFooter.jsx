import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { PostType, AuthorType, LikesType, CommentsType } from 'types';
import { TextBtn, Span } from 'components';
import { useCookie } from 'hooks';
import { likeApi, notification } from 'api';
import * as S from './style';

const useLikes = ({ rawLikes, postId, authorId }) => {
  const [likes, setLikes] = useState(rawLikes);
  const [userLike, setUserLike] = useState(null);

  const {
    user: { _id: userId },
    isLoggedIn,
  } = useSelector(state => state.user);
  const { getCookie } = useCookie();

  useEffect(() => {
    if (!isLoggedIn) {
      setUserLike(null);
      return;
    }
    setUserLike(likes.find(like => like.user === userId));
  }, [isLoggedIn, userId, likes]);

  const createLike = async () => {
    const token = getCookie();
    try {
      const createdLike = await likeApi.create({
        token,
        data: {
          postId,
        },
      });
      setLikes([...likes, createdLike]);
      setUserLike(createdLike);
      await notification.createNotification({
        token,
        data: {
          notificationType: 'LIKE',
          notificationTypeId: createdLike._id,
          userId: authorId,
          postId,
        },
      });
    } catch (e) {
      console.error(e.message);
    }
  };

  const deleteLike = async likeId => {
    const token = getCookie();
    try {
      const deletedLike = await likeApi.delete({
        token,
        data: { likeId },
      });
      setLikes(likes.filter(like => like._id !== deletedLike._id));
      setUserLike(null);
    } catch (e) {
      console.error(e.message);
    }
  };

  return { likes, userLike, createLike, deleteLike };
};

export function PostFooter({
  post,
  author,
  likes: rawLikes,
  comments,
  toggleComments,
}) {
  const { isLoggedIn } = useSelector(state => state.user);
  const { likes, userLike, createLike, deleteLike } = useLikes({
    rawLikes,
    postId: post._id,
    authorId: author._id,
  });

  const onLikeBtnClick = async () => {
    if (userLike == null) {
      await createLike();
    } else {
      await deleteLike(userLike._id);
    }
  };

  const onCommentBtnClick = () => {
    toggleComments();
  };

  return (
    <S.Footer>
      <S.Flex>
        {!isLoggedIn && <S.StyledIcon icon="heart" />}
        {isLoggedIn && (
          <S.StyledIconBtn
            type="button"
            onClick={onLikeBtnClick}
            icon="heart"
            color={userLike != null ? 'red' : 'textSecond'}
          />
        )}
        {likes.length > 0 && (
          <Span fontSize="small" color="textSecond">
            {likes.length}
          </Span>
        )}
      </S.Flex>
      <div>
        {(isLoggedIn || comments.length > 0) && (
          <TextBtn type="button" onClick={onCommentBtnClick}>
            <Span fontSize="small" color="textSecond">
              {comments.length > 0 ? `댓글 ${comments.length}개` : '댓글'}
            </Span>
          </TextBtn>
        )}
      </div>
    </S.Footer>
  );
}

PostFooter.propTypes = {
  post: PostType.isRequired,
  author: AuthorType.isRequired,
  likes: LikesType.isRequired,
  comments: CommentsType.isRequired,
  toggleComments: PropTypes.func.isRequired,
};
