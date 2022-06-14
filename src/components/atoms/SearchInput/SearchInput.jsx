import { useState } from 'react';
import * as S from './style';

export function SearchInput() {
  const [text, setText] = useState('');
  const onChange = (e) => {
    setText(e.target.value);
  }
  console.log(text);
  return <S.SearchInput type="text" value={text} onChange={onChange}/>;
}
