import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Profile, ProfileInfo, PostList } from 'components';
import { postApi, users } from 'api';

export function ProfileArea({ userId }) {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState('');
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    if (userId) {
      const getUserApi = async () => {
        const getUser = await users.getUser({ userId });
        setUser(getUser);
        console.log(user);
      };
      const getUserPostsApi = async () => {
        setIsLoading(true);
        const getPost = await postApi.getUserPosts({ userId });
        setUserPosts(getPost);
        setIsLoading(false);
      };
      getUserApi();
      getUserPostsApi();
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
      {userPosts.length > 0 ? (
        <PostList posts={userPosts} isLoading={isLoading} />
      ) : null}
    </div>
  );
}

ProfileArea.propTypes = {
  userId: PropTypes.string.isRequired,
};
