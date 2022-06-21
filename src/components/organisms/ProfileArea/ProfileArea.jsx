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
        setUser(getUser);
      };
      getUserApi();
    }
  }, [userId]);

  return (
    <div>
      {user && (
        <>
          <Profile userImage={user.image} userName={user.fullName} userId={userId} />
          <ProfileInfo
            userId={userId}
            posts={user.posts}
            followers={user.followers}
            following={user.following}
          />
        </>
      )}
    </div>
  );
}

ProfileArea.propTypes = {
  userId: PropTypes.string.isRequired,
};
