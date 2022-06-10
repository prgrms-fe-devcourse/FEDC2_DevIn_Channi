import { SearchResultItem } from "components";
import * as S from './style'; 

export function SearchResultTab() {
    return <S.SearchResultTab>
        {/* itemNum => User, Post array length */}
        <SearchResultItem itemName="프로필" itemNum="100+"/>
        <SearchResultItem itemName="게시물" itemNum="100+"/>
    </S.SearchResultTab>
}