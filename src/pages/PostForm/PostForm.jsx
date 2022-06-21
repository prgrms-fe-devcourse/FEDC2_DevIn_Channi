import { useState, useEffect } from 'react';
import { useNavigate, useMatch } from 'react-router-dom';
import { PostFormPage } from 'components';
import { postApi } from 'api';

export function PostForm() {
  const [post, setPost] = useState(null);
  const navigate = useNavigate();
  const postEditRouteMatch = useMatch('/posts/:postId/edit');

  useEffect(() => {
    if (postEditRouteMatch == null) return;

    const { postId } = postEditRouteMatch.params;

    (async () => {
      try {
        const data = await postApi.get(postId);
        setPost(data);
      } catch (e) {
        console.error(e.message);
        // :postId가 없어서 데이터를 불러오지 못하면 -> 404로
        navigate('/');
      }
    })();
  }, [postEditRouteMatch, navigate]);

  return <PostFormPage post={post} />;
}
