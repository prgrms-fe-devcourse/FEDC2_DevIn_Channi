import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Profile, AuthProfile, Loading, SearchNone } from 'components';
import { users } from 'api';
import { setAllUsers } from 'store';
import * as S from './style';

export function ProfileList({ FollowUserList }) {
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
    if (FollowUserList.length > 0) {
      setLoading(true);
      setUser(FollowUserList);
      setIsUserExsist(true);
      setLoading(false);
    }
  }, [FollowUserList]);

  useEffect(() => {
    if (searchUsersResult) {
      setIsUserExsist(searchUsersResult.length > 0);
      setUser(searchUsersResult);
      setIsSearchData(true);
    } else if (!searchUsersResult && FollowUserList.length === 0) {
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
  }, [count, dispatch, isSearchData, searchUsersResult, FollowUserList]);

  console.log(user);

  return (
    <S.ProfileList>
      {!loading && !isUserExsist && <SearchNone />}
      {isUserExsist &&
        user.map((userInfo, idx) =>
          authUser._id === userInfo._id ? (
            <AuthProfile
              userId={userInfo._id}
              userImage={userInfo.image || ''}
              userName={userInfo.fullName}
            />
          ) : (
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
          ),
        )}
      {loading && <Loading />}
    </S.ProfileList>
  );
}

ProfileList.propTypes = {
  FollowUserList: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      image: PropTypes.string,
      fullName: PropTypes.string,
    }),
  ),
};

ProfileList.defaultProps = {
  FollowUserList: [],
};
