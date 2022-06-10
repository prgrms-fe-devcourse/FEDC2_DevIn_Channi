import * as S from './style';

export function SearchTarget(item) {
    const { itemName } = item
    return <S.SearchTarget>
        {itemName}
    </S.SearchTarget>
}