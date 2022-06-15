import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { search } from 'api';
import { userInfo } from 'stores/search';
import * as S from './style';

export function SearchInput() {
  const [text, setText] = useState(''); // input안 value
  const [keyword, setKeyword] = useState(''); // enter 눌렀을 때 text값
  const [data, setData] = useState(''); // 서버에서 불러온 검색 결과
  const dispatch = useDispatch();

  const onKeyPress = e => {
    if (e.key === 'Enter') {
      setKeyword(text);
    }
  };

  useEffect(() => {
    if (keyword) {
      const getData = async () => {
        const searchApi = await search.searchUser(keyword);
        setData(searchApi);
      };
      getData();
    }
  }, [keyword]);

  useEffect(() => {
    if (data) dispatch(userInfo(data));
    if (!text) {
      dispatch(userInfo(null));
      setKeyword('');
      setData('');
    }
  }, [data, dispatch, text]);

  const onChange = e => {
    setText(e.target.value);
  };

  return (
    <S.SearchInput
      type="text"
      value={text}
      onChange={onChange}
      onKeyPress={onKeyPress}
    />
  );
}
