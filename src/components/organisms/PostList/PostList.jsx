import { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Post } from 'components';
import { postApi } from 'api';
// import { PostsType } from 'types';

export const Div = styled.div`
  height: 1rem;
  background-color: ${({ theme }) => theme.color.backSub};
`;

export function PostList() {
  const [posts, setPosts] = useState([]);

  // 페이지에서 posts 받아야함(나중에 삭제)
  useEffect(() => {
    (async () => {
      try {
        const data = await postApi.getAll();
        setPosts(data);
      } catch (e) {
        console.error(e.message);
      }
    })();
  }, []);

  const deletePost = async (postId, token) => {
    try {
      await postApi.delete(postId, token);
      const newPosts = posts.filter(post => post._id !== postId);
      setPosts(newPosts);
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <div>
      {posts.length > 0 ? (
        <ul>
          {posts.map(post => (
            <li key={post._id}>
              <Div />
              <Post post={post} deletePost={deletePost} />
            </li>
          ))}
        </ul>
      ) : (
        <div>loading</div>
      )}
    </div>
  );
}

// PostList.propTypes = {
//   posts: PostsType,
// };

// PostList.defaultProps = {
//   posts: [],
// };
