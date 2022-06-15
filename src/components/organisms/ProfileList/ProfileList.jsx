import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Profile, Loading, SearchNone } from 'components';
import { users } from 'api';
import * as S from './style';

export function ProfileList() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState([]);
  const [isUserExsist, setIsUserExsist] = useState(true);
  const [isSearchData, setIsSearchData] = useState(false);
  const [count, setCount] = useState(10);

  const searchResult = useSelector(state => state.search.value);
  const getCount = setcount => {
    setCount(setcount + 10);
  };

  useEffect(() => {
    if (searchResult) {
      setIsUserExsist(searchResult.length > 0);
      setUser(searchResult);
      setIsSearchData(true);
    } else {
      const getUsers = async () => {
        setLoading(true);
        const usersInfo = await users.getUsers({ offset: 0, limit: count });
        setIsSearchData(false);
        if(!isSearchData) setUser(usersInfo);
        setIsUserExsist(true);
        setLoading(false);
      };
      getUsers();
    }
  }, [searchResult, isSearchData, count]);

  return (
    <S.ProfileList>
      {!isUserExsist && <SearchNone />}
      {isUserExsist &&
        user.map((userInfo, idx) => (
          <Profile
            getCount={getCount}
            idx={idx + 1}
            key={userInfo._id}
            userImage={userInfo.image || ''}
            userName={userInfo.fullName}
            isSearchData={isSearchData}
          />
        ))}
      {loading && <Loading />}
    </S.ProfileList>
  );
}
