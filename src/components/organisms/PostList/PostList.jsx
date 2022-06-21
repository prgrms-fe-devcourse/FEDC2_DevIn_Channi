import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { PostsType } from 'types';
import { Post, Icon } from 'components';
import { useCookie } from 'hooks';
import { postApi } from 'api';
import * as S from './style';

const usePosts = rawPosts => {
  const [posts, setPosts] = useState(rawPosts);

  useEffect(() => {
    setPosts(rawPosts);
  }, [rawPosts]);

  const { getCookie } = useCookie();

  const deletePost = async ({ postId }) => {
    const token = getCookie();
    try {
      await postApi.delete({
        token,
        data: {
          postId,
        },
      });
      setPosts(posts.filter(post => post._id !== postId));
    } catch (e) {
      console.error(e.message);
    }
  };

  return { posts, deletePost };
};

export function PostList({ posts: rawPosts, isLoading, setTarget }) {
  const { posts, deletePost } = usePosts(rawPosts);

  return (
    <div>
      <ul>
        {posts.map(post => (
          <li key={post._id}>
            <S.Box />
            <Post post={post} deletePost={deletePost} />
          </li>
        ))}
      </ul>

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