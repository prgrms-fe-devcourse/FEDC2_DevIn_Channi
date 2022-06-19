import { useEffect, useState } from 'react';
import { SamplePost, Loading } from 'components';
import { posts } from 'api';
import * as S from './style';

export function SamplePostList() {
  const [postList, setPostList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getPosts = async () => {
      const postContent = await posts.getPosts({
        offset: 0,
        limit: 10,
        channelId: '62a86596b9bad678d9c2cb9d',
      });
      setPostList(postContent);
      setLoading(false);
    };
    getPosts();
  }, []);

  return (
    <S.SamplePostList>
      {postList.map(post => (
        <SamplePost key={post._id} title={post.title} />
      ))}
      {loading && <Loading />}
    </S.SamplePostList>
  );
}
