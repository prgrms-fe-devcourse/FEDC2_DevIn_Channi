import PropTypes from "prop-types"
import { ItemText, ItemNumber } from 'components';
import { theme } from "styles";
import * as S from './style';

export function SearchResultItem({ getItem, name, itemName, itemNum }) {

  const onTabClick = () => {
    getItem(name);
  };
  
  const style = {
    fontSize: 0.875,
    backgroundColor: theme.color.line,
  }

  return (
    <S.SearchResultItem onClick={onTabClick}>
      <ItemText itemName={itemName} />
      <ItemNumber itemNum={itemNum} style={style}/>
    </S.SearchResultItem>
  );
}

SearchResultItem.propTypes = {
  getItem: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  itemName: PropTypes.string.isRequired,
  itemNum: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
}

