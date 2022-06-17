import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { search } from 'api';
import { setUsersInfo, setPostsInfo } from 'store/searchSlice';
import * as S from './style';

export function SearchInput() {
  const [text, setText] = useState(''); 
  const [keyword, setKeyword] = useState(''); 
  const [usersResult, setUsersResult] = useState(null); 
  const [postsResult, setPostsResult] = useState(null); 

  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      setKeyword(text);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [text]);

  useEffect(() => {
    if (keyword) {
      const getData = async () => {
        const searchUsersApi = await search.searchUser(keyword);
        setUsersResult(searchUsersApi);

        const searchAllApi = await search.searchAll(keyword);
        setPostsResult(searchAllApi.slice(searchUsersApi.length));
      };
      getData();
    } else {
      dispatch(setUsersInfo(null));
      setUsersResult('');
      setPostsResult('');
    }
  }, [keyword, dispatch]);

  useEffect(() => {
    if (usersResult) dispatch(setUsersInfo(usersResult));
    if (postsResult) dispatch(setPostsInfo(postsResult));
  }, [usersResult, postsResult, dispatch]);

  const onChange = e => {
    setText(e.target.value);
  };

  return (
    <S.SearchInput
      type="text"
      value={text}
      onChange={onChange}
      placeholder="검색어를 입력해주세요..."
    />
  );
}
