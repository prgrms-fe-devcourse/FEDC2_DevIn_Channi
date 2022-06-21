import { useEffect, useState } from 'react';
import { NavTemplate, PostList } from 'components';
import { postApi } from 'api';

export function Home() {
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
      <PostList posts={posts} isLoading={false} />
    </NavTemplate>
  );
}
