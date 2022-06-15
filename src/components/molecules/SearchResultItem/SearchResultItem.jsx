import PropTypes from "prop-types"
import { SearchTarget, SearchNumber } from 'components';
import * as S from './style';

export function SearchResultItem({ getItem, name, itemName, itemNum }) {
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

SearchResultItem.propTypes = {
  getItem: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  itemName: PropTypes.string.isRequired,
  itemNum: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
}

