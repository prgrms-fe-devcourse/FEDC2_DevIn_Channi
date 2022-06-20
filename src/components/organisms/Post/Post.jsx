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
        postId={post._id}
        postCreatedAt={post.createdAt}
        authorId={post.author._id}
        authorAvatarUrl={post.author.image}
        authorName={post.author.fullName}
        deletePost={deletePost}
      />
      <PostBody postContent={post.title} og={ogData} />
      <PostFooter
        postId={post._id}
        authorId={post.author._id}
        likes={post.likes}
        comments={post.comments}
        toggleComments={toggleComments}
      />
      {isCommentsOpen && (
        <Comments post={post} author={post.author} comments={post.comments} />
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
