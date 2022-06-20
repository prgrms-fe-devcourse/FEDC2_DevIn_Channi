import { useState } from 'react';
import PropTypes from 'prop-types';
import { PostHeader, PostBody, PostFooter, Comments } from 'components';
import { PostType } from 'types';
import { ogData } from './data';
import * as S from './style';

export function Post({ post, deletePost }) {
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);

  const toggleComments = () => {
    setIsCommentsOpen(!isCommentsOpen);
  };

  return (
    <S.Article>
      <PostHeader
        authorId={post.author._id}
        authorAvatarUrl={post.author.image}
        authorName={post.author.fullName}
        postCreatedAt={post.createdAt}
        postId={post._id}
        deletePost={deletePost}
      />
      <PostBody postContent={post.title} og={ogData} />
      <PostFooter
        authorId={post.author._id}
        postId={post._id}
        likes={post.likes}
        comments={post.comments}
        toggleComments={toggleComments}
      />
      {isCommentsOpen && (
        <Comments comments={post.comments} author={post.author} />
      )}
    </S.Article>
  );
}

Post.propTypes = {
  post: PostType,
  deletePost: PropTypes.func.isRequired,
};

Post.defaultProps = {
  post: {},
};
