import { SearchTarget, SearchNumber } from 'components';
import * as S from './style';

export function SearchResultItem(item) {
  const { getItem, name, itemName, itemNum } = item;
  const onTabClick = () => {
    getItem(name);
  };
  return (
    <S.SearchResultItem onClick={onTabClick}>
      <SearchTarget itemName={itemName} />
      <SearchNumber itemNum={itemNum} />
    </S.SearchResultItem>
  );
}
