import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Profile, Loading, SearchNone } from 'components';
import { users } from 'api';
import { allusers } from 'store/allUsers';
import * as S from './style';

export function ProfileList() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState([]);
  const [isUserExsist, setIsUserExsist] = useState(true);
  const [isSearchData, setIsSearchData] = useState(false);
  const [count, setCount] = useState(10);

  const dispatch = useDispatch();

  const searchUsersResult = useSelector(state => state.searchUsers.value);

  const getCount = setcount => {
    if(count <= setcount) {
      setCount(setcount + 10);
    }
  };

  useEffect(() => {
    if (searchUsersResult) {
      setIsUserExsist(searchUsersResult.length > 0);
      setUser(searchUsersResult);
      setIsSearchData(true);
    } else {
      // searchData가 있는 상태에서 input을 비우면
      // searchData를 담고있는 user를 비워줌
      if(isSearchData) setUser([]);
      const getUsers = async () => {
        setLoading(true);
        const usersInfo = await users.getUsers({ offset: 0, limit: count });
        setIsSearchData(false); // SearchData가 아니라는 뜻
        setUser(usersInfo); // 전체 사용자 목록으로 user 변경
        dispatch(allusers(usersInfo)) // 전체 사용자 목록 redux에 저장
        setIsUserExsist(true); // 유저 존재함
        setLoading(false); 
      };
      getUsers();
    }
  }, [searchUsersResult, dispatch, count, isSearchData, isUserExsist]);


  return (
    <S.ProfileList>
      {!loading && !isUserExsist && <SearchNone />}
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
