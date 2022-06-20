import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { LikesType, CommentsType } from 'types';
import { TextBtn, Span } from 'components';
import { useCookie } from 'hooks';
import { likeApi, notification } from 'api';
import * as S from './style';

const useLikes = likesData => {
  const {
    user: { _id: userId },
    isLoggedIn,
  } = useSelector(state => state.user);
  const { getCookie } = useCookie();

  const [likes, setLikes] = useState(likesData);
  const [userLike, setUserLike] = useState(null);

  useEffect(() => {
    if (!isLoggedIn) {
      setUserLike(null);
      return;
    }

    const newUserlike = likes.find(like => like.user === userId);
    setUserLike(newUserlike);
  }, [likes, isLoggedIn, userId]);

  const createLike = async (postId, authorId) => {
    const token = getCookie();
    try {
      const createdLike = await likeApi.create({ postId, token });
      setLikes([...likes, createdLike]);
      setUserLike(createdLike);
      // const notif = await notification.create({
      //   type: 'LIKE',
      //   typeId: createdLike._id,
      //   userId: authorId,
      //   postId,
      //   token,
      // });
    } catch (e) {
      console.error(e.message);
    }
  };

  const deleteLike = async likeId => {
    const token = getCookie();
    try {
      const deletedLike = await likeApi.delete({ likeId, token });
      setLikes(likes.filter(like => like._id !== deletedLike._id));
      setUserLike(null);
    } catch (e) {
      console.error(e.message);
    }
  };

  return { likes, userLike, createLike, deleteLike };
};

export function PostFooter({
  authorId,
  postId,
  likes: likesData,
  comments,
  toggleComments,
}) {
  const { isLoggedIn } = useSelector(state => state.user);
  const { likes, userLike, createLike, deleteLike } = useLikes(likesData);

  const onLikeBtnClick = () => {
    if (userLike == null) {
      createLike(postId, authorId);
    } else {
      deleteLike(userLike._id);
    }
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
      <TextBtn type="button" onClick={toggleComments}>
        <Span fontSize="small" color="textSecond">
          {comments.length > 0 ? `댓글 ${comments.length}개` : '댓글 보기'}
        </Span>
      </TextBtn>
    </S.Footer>
  );
}

PostFooter.propTypes = {
  authorId: PropTypes.string.isRequired,
  postId: PropTypes.string.isRequired,
  likes: LikesType.isRequired,
  comments: CommentsType.isRequired,
  toggleComments: PropTypes.func.isRequired,
};
