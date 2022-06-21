import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Profile, ProfileInfo, PostList } from 'components';
import { postApi, users } from 'api';

export function ProfileArea({ userId }) {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState('');
  const [post, setPost] = useState([]);

  useEffect(() => {
    if (userId) {
      const getUserApi = async () => {
        const getUser = await users.getUser({ userId });
        setUser(getUser);
      };
      const getUserPostApi = async () => {
        setIsLoading(true);
        const getPost = await postApi.getUserPost({ id: userId });
        setPost(getPost);
        setIsLoading(false);
      };
      getUserApi();
      getUserPostApi();
    }
  }, [userId]);

  return (
    <div>
      {user && (
        <>
          <Profile
            userImage={user.image}
            userName={user.fullName}
            userId={userId}
          />
          <ProfileInfo
            userId={userId}
            posts={user.posts}
            followers={user.followers}
            following={user.following}
          />
        </>
      )}
      {post.length > 0 ? <PostList posts={post} isLoading={isLoading} /> : null}
    </div>
  );
}

ProfileArea.propTypes = {
  userId: PropTypes.string.isRequired,
};
