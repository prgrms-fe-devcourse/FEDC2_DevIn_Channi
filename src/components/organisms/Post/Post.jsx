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
      {post && (
        <>
          <PostHeader
            post={post}
            author={post.author}
            deletePost={deletePost}
          />
          <PostBody postBody={post.title} />
          <PostFooter
            post={post}
            author={post.author}
            likes={post.likes}
            comments={post.comments}
            toggleComments={toggleComments}
          />
          {isCommentsOpen && (
            <Comments
              post={post}
              author={post.author}
              comments={post.comments}
            />
          )}
        </>
      )}
    </S.Article>
  );
}

Post.propTypes = {
  post: PostType,
  deletePost: PropTypes.func,
};

Post.defaultProps = {
  post: null,
  deletePost: null,
};
