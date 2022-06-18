import { useState } from 'react';
import PropTypes from 'prop-types';
import { PostHeader, PostBody, PostFooter, Comments } from 'components';
import { PostType } from 'types';
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
      <PostHeader
        authorId={postData.author._id}
        authorAvatarUrl={postData.author.image}
        authorName={postData.author.fullName}
        postCreatedAt={postData.createdAt}
        postId={postData._id}
      />
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
  post: PostType,
};

Post.defaultProps = {
  post: {},
};
