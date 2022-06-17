import { SearchIcon, SearchInput } from 'components';
import * as S from './style'; 

export function SearchBar() {
    return <S.SearchBar>
        <SearchIcon/>
        <SearchInput/>
    </S.SearchBar>
}