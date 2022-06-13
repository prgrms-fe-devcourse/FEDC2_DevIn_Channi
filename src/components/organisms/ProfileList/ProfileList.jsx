import { useCallback, useEffect, useState } from 'react';
import { Profile, Loading } from 'components';
import { users } from 'api';
import * as S from './style';

export function ProfileList() {
  const [loading, setLoading] = useState(false);
  const [User, setUser] = useState([]);
  const [count, setCount] = useState(10);

  const getCount = setcount => {
    setCount(setcount + 10);
  };

  const getUsers = useCallback(async () => {
    setLoading(true);
    const getuser = await users.getUsers({ offset: 0, limit: count });
    setUser(getuser);
    setLoading(false);
  }, [count]);

  useEffect(() => {
      getUsers();
  }, [getUsers]);

  console.log(loading);
  const profileList =
    !loading && User.length === 0 ? (
      <div>검색결과없음</div>
    ) : (
      User.map((user, idx) => (
        <Profile
          getCount={getCount}
          idx={idx + 1}
          key={user.id}
          userImage={user.image}
          userName={user.fullName}
        />
      ))
    );
  return <S.ProfileList>
    {profileList}
    {loading ? <Loading/> : null}
  </S.ProfileList>;
}
