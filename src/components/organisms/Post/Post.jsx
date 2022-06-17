import { useState } from 'react';
import PropTypes from 'prop-types';
import { PostHeader, PostBody, PostFooter, Comments } from 'components';
import { postData, ogData } from './data';
import * as S from './style';

export function Post({ post }) {
  // 초기값 false로
  const [isCommentsOpen, setIsCommentsOpen] = useState(true);

  const onCommentBtnClick = () => {
    setIsCommentsOpen(!isCommentsOpen);
  };

  return (
    <S.Article>
      <PostHeader author={postData.author} postCreatedAt={postData.createdAt} />
      <PostBody postContent={postData.title} og={ogData} />
      <PostFooter
        likesCount={postData.likes.length}
        commentsCount={postData.comments.length}
        onCommentBtnClick={onCommentBtnClick}
      />
      {isCommentsOpen && (
        <Comments comments={postData.comments} author={postData.author} />
      )}
    </S.Article>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,

    author: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      fullName: PropTypes.string.isRequired,
      image: PropTypes.string,
    }).isRequired,

    likes: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
      }),
    ).isRequired,

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
  }).isRequired,
};
