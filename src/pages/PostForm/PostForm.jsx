import { useState, useEffect } from 'react';
import { useNavigate, useMatch } from 'react-router-dom';
import { PostFormPage } from 'components';
import { postApi } from 'api';

export function PostForm() {
  const [post, setPost] = useState(null);
  const navigate = useNavigate();
  const updateRouteMatch = useMatch('/posts/:postId/update');

  useEffect(() => {
    if (updateRouteMatch == null) return;

    const { postId } = updateRouteMatch.params;

    (async () => {
      try {
        const data = await postApi.get(postId);
        setPost(data);
      } catch (e) {
        console.error(e.message);
        navigate('/404');
      }
    })();
  }, [updateRouteMatch, navigate]);

  return <PostFormPage post={post} />;
}
