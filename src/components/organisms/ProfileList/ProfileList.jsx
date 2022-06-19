import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Profile, Loading, SearchNone } from 'components';
import { users } from 'api';
import { setAllUsers } from 'store';
import * as S from './style';

export function ProfileList() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState([]);
  const [isUserExsist, setIsUserExsist] = useState(true);
  const [isSearchData, setIsSearchData] = useState(false);
  const [count, setCount] = useState(10);

  const dispatch = useDispatch();

  const searchUsersResult = useSelector(state => state.search.user);
  const authUser = useSelector(state => state.user.user);

  const getCount = setcount => {
    if (count <= setcount) {
      setCount(setcount + 10);
    }
  };

  useEffect(() => {
    if (searchUsersResult) {
      setIsUserExsist(searchUsersResult.length > 0);
      setUser(searchUsersResult);
      setIsSearchData(true);
    } else {
      if (isSearchData) setUser([]);
      const getUsers = async () => {
        setLoading(true);
        const usersInfo = await users.getUsers({ offset: 0, limit: count });
        setIsSearchData(false);
        setUser(usersInfo);
        dispatch(setAllUsers(usersInfo));
        setIsUserExsist(true);
        setLoading(false);
      };
      getUsers();
    }
  }, [count, dispatch, isSearchData, searchUsersResult]);

  return (
    <S.ProfileList>
      {!loading && !isUserExsist && <SearchNone />}
      {isUserExsist &&
        user.map((userInfo, idx) => (
            authUser._id !== userInfo._id && (
              <Profile
                getCount={getCount}
                idx={idx + 1}
                key={userInfo._id}
                userId={userInfo._id}
                userImage={userInfo.image || ''}
                userName={userInfo.fullName}
                userFollowers={userInfo.followers}
                isSearchData={isSearchData}
              />
            )
        ))}
      {loading && <Loading />}
    </S.ProfileList>
  );
}
