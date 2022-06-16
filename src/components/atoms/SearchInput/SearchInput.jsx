import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { search } from 'api';
import { userInfo } from 'stores/searchUsers';
import { postInfo } from 'stores/searchPosts';
import * as S from './style';

export function SearchInput() {
  const [text, setText] = useState(''); // input안 value
  const [keyword, setKeyword] = useState(''); // 검색할 keyword
  const [usersResult, setUsersResult] = useState(''); // 서버에서 불러온 유저 검색 결과
  const [postsResult, setPostsResult] = useState(''); // 서버에서 불러온 모든 검색 결과

  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      setKeyword(text)
    }, 1000)
    return () => {
      clearTimeout(timer);
    }
  }, [text]);

  useEffect(() => {
    if (keyword) {
      const getData = async () => {
        const searchUsersApi = await search.searchUser(keyword);
        setUsersResult(searchUsersApi);

        const searchAllApi = await search.searchAll(keyword);
        setPostsResult(searchAllApi.slice(searchUsersApi.length))
      };
      getData();
    } else {
      // input에 아무것도 안넣었을 때 전체 사용자 목록 불러오도록 함
      // userInfo 값이 null 검색결과 없어서 사용자 목록 불러옴
      dispatch(userInfo(null));
      setUsersResult('');
      setPostsResult('');
    }
  }, [keyword, dispatch])

  useEffect(() => {
    if (usersResult) dispatch(userInfo(usersResult));
    if (postsResult) dispatch(postInfo(postsResult));
  }, [usersResult, postsResult, dispatch]);

  const onChange = e => {
    setText(e.target.value);
  };

  return (
    <S.SearchInput
      type="text"
      value={text}
      onChange={onChange}
    />
  );
}
