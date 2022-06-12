import React from 'react';
import { SearchTarget, SearchNumber } from 'components';
import * as S from './style';

export function SearchResultItem(item) {
  const { getData, name, itemName, itemNum } = item;
  const onTabClick = () => {
    getData(name);
  };
  return (
    <S.SearchResultItem onClick={onTabClick}>
      <SearchTarget itemName={itemName} />
      <SearchNumber itemNum={itemNum} />
    </S.SearchResultItem>
  );
}
