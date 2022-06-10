import * as S from './style';

export function SearchNumber(item) {
  const { itemNum } = item
  return <S.SearchNumber>
    { itemNum }
  </S.SearchNumber>
}