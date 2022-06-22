import { useState, useEffect } from 'react';
import { useMatch, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { PostType } from 'types';
import { PostHeader, PostBody, PostFooter, Comments } from 'components';
import { users } from 'api';
import * as S from './style';

export function Post({ post, onDelete }) {
  const searchMatch = useMatch('/search');
  const [author, setAuthor] = useState({
    _id: '',
    fullName: '',
    image: '',
  });

  useEffect(() => {
    if (searchMatch && typeof post.author === 'string') {
      (async () => {
        const rawAuthor = await users.getUser({ userId: post.author });
        setAuthor(rawAuthor);
      })();
    }
  }, [post]);

  useEffect(() => {}, []);

  const [isCommentsOpen, setIsCommentsOpen] = useState(false);

  const toggleComments = () => {
    setIsCommentsOpen(!isCommentsOpen);
  };

  return (
    <S.Article>
      {post && (
        <>
          <PostHeader
            post={post}
            author={searchMatch ? author : post.author}
            onDelete={onDelete}
          />
          <PostBody postBody={post.title} />
          {!searchMatch && (
            <>
              <PostFooter
                post={post}
                author={post.author}
                likes={post.likes}
                comments={post.comments}
                toggleComments={toggleComments}
              />
              {isCommentsOpen && (
                <Comments
                  post={post}
                  author={post.author}
                  comments={post.comments}
                />
              )}
            </>
          )}
        </>
      )}
    </S.Article>
  );
}

Post.propTypes = {
  post: PostType,
  onDelete: PropTypes.func,
};

Post.defaultProps = {
  post: null,
  onDelete: null,
};
