import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavTemplate, CreatePost, PostList } from 'components';
import { postApi } from 'api';
import * as S from './style';

export function Home() {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await postApi.getAll({
          params: {
            offset: '',
            limit: '',
          },
        });
        setPosts(data);
      } catch (e) {
        console.error(e.message);
      }
    })();
  }, [setPosts]);

  return (
    <NavTemplate>
      {isLoggedIn && (
        <S.FixedItem>
          <CreatePost />
        </S.FixedItem>
      )}
      <S.Container isLoggedIn={isLoggedIn}>
        <PostList posts={posts} isLoading={false} />
      </S.Container>
    </NavTemplate>
  );
}
