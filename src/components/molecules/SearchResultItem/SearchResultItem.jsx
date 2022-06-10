import {SearchTarget, SearchNumber} from 'components';
import * as S from './style'; 

export function SearchResultItem(item) {
    const {itemName, itemNum} = item;
    return <S.SearchResultItem>
        <SearchTarget itemName={itemName}/>
        <SearchNumber itemNum={itemNum}/>
    </S.SearchResultItem>
}