import { useEffect, useState } from 'react';
import { Profile, Loading } from 'components';
import { users } from 'api';
import * as S from './style';

// 검색 결과 가져올 때도 생각해야함
// 검색 결과는 offset, limit 값 지정 못 함
export function ProfileList() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState([]);
  const [isUserExsist, setIsUserExsist] = useState(true);
  const [count, setCount] = useState(10);

  const getCount = setcount => {
    setCount(setcount + 10);
  };

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      const usersInfo = await users.getUsers({ offset: 0, limit: count });
      setUser(usersInfo);
      setIsUserExsist(usersInfo.length > 0);
      setLoading(false);
    }
    getUsers();
  }, [count]);

  return (
    <S.ProfileList>
      {!isUserExsist && <div>검색 결과가 없습니다.</div>}
      {isUserExsist &&
        user.map((userInfo, idx) => (
          <Profile
            getCount={getCount}
            idx={idx + 1}
            key={userInfo._id}
            userImage={userInfo.image || ''}
            userName={userInfo.fullName}
          />
        ))}
      {loading && <Loading />}
    </S.ProfileList>
  );
}
