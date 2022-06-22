import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { PostsType } from 'types';
import { Post, Icon } from 'components';

import * as S from './style';

const usePosts = rawPosts => {
  const [posts, setPosts] = useState(rawPosts);

  useEffect(() => {
    setPosts(rawPosts);
  }, [rawPosts]);

  const onDelete = postId => {
    setPosts(posts.filter(post => post._id !== postId));
  };

  return { posts, onDelete };
};

export function PostList({ posts: rawPosts, isLoading, setTarget }) {
  const { posts, onDelete } = usePosts(rawPosts);

  return (
    <div>
      <ul>
        {posts.map(post => (
          <li key={post._id}>
            <S.Box />
            <Post post={post} onDelete={onDelete} />
          </li>
        ))}
      </ul>
      <S.Box />

      <div ref={setTarget} id="target">
        {isLoading && (
          <S.Flex>
            <Icon icon="spinner" />
          </S.Flex>
        )}
      </div>
    </div>
  );
}

PostList.propTypes = {
  posts: PostsType,
  isLoading: PropTypes.bool,
  setTarget: PropTypes.func,
};

PostList.defaultProps = {
  posts: [],
  isLoading: true,
  setTarget: null,
};
