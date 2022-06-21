import { useState } from 'react';
import PropTypes from 'prop-types';
import { PostsType } from 'types';
import { Post, Icon } from 'components';
import { useCookie } from 'hooks';
import { postApi } from 'api';
import * as S from './style';

const usePosts = rawPosts => {
  const [posts, setPosts] = useState(rawPosts);

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

  return { posts, deletePost, setPosts };
};

export function PostList({ posts: rawPosts, isLoading }) {
  const { posts, deletePost, setPosts } = usePosts(rawPosts);

  // 페이지에서 rawPosts 받고 삭제
  // usePosts의 setPosts도 삭제
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const data = await postApi.getAll({
  //         params: {
  //           offset: '',
  //           limit: '',
  //         },
  //       });
  //       setPosts(data);
  //     } catch (e) {
  //       console.error(e.message);
  //     }
  //   })();
  // }, [setPosts]);

  return (
    <div>
      {!isLoading && posts.length > 0 && (
        <ul>
          {posts.map(post => (
            <li key={post._id}>
              <S.Box />
              <Post post={post} deletePost={deletePost} />
            </li>
          ))}
        </ul>
      )}
      {isLoading && (
        <S.Flex>
          <Icon icon="spinner" />
        </S.Flex>
      )}
    </div>
  );
}

PostList.propTypes = {
  // 페이지에서 rawPosts 받고 isRequired
  posts: PostsType,
  isLoading: PropTypes.bool.isRequired,
};

PostList.defaultProps = {
  posts: [],
};
