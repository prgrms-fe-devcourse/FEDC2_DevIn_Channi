import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { NavTemplate, Post } from 'components';
import { postApi } from 'api';

export function PostDetail() {
  const [post, setPost] = useState(null);
  const { postId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        console.log(postId);
        const rawPost = await postApi.get({ postId });
        setPost(rawPost);
        console.log(rawPost);
      } catch (e) {
        console.error(e.message);
        navigate('/');
      }
    })();
  }, [navigate, postId]);

  return (
    <NavTemplate>
      <Post post={post} />
    </NavTemplate>
  );
}

PostDetail.propTypes = {};
