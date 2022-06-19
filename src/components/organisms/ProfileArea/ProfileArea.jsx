import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Profile, ProfileInfo } from 'components';
import { users } from 'api';

export function ProfileArea({ userId }) {
  const [user, setUser] = useState('');

  useEffect(() => {
    if (userId) {
      const getUserApi = async () => {
        const getUser = await users.getUser({ userId });
        console.log(getUser);
        setUser(getUser);
        return getUser;
      };
      getUserApi();
    }
  }, [userId]);

  return (
    <div>
      {user && (
        <>
          <Profile userName={user.fullName} userId={userId} />
          <ProfileInfo
            posts={user.posts.length}
            followers={user.followers.length}
            following={user.following.length}
          />
        </>
      )}
    </div>
  );
}

ProfileArea.propTypes = {
  userId: PropTypes.string.isRequired,
};
