import { useState } from 'react';
import PropTypes from 'prop-types';
import { PostHeader, PostBody, PostFooter, Comments } from 'components';
import { PostType } from 'types';
import * as S from './style';

export function Post({ post, deletePost }) {
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);

  const toggleComments = () => {
    setIsCommentsOpen(!isCommentsOpen);
  };

  return (
    <S.Article>
      <PostHeader post={post} author={post.author} deletePost={deletePost} />
      <PostBody postContent={post.title} />
      <PostFooter
        post={post}
        author={post.author}
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
  post: PostType.isRequired,
  deletePost: PropTypes.func.isRequired,
};
