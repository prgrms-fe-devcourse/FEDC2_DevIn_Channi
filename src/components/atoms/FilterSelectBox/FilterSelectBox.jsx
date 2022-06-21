import { useDispatch } from 'react-redux';
import { setFilterItem } from 'store';
import { nanoid } from 'nanoid';
import { FILTER_ITEM } from 'assets';
import * as S from './style';

export function FilterSelectBox() {
  const filterItems = FILTER_ITEM;
  const dispatch = useDispatch();

  const handleClickSelectItem = e => {
    dispatch(setFilterItem(e.target.value));
  };
  return (
    <S.FilterSelectBox>
      {filterItems.map(item => (
        <div key={nanoid()}>
          <input
            type="checkbox"
            name="filter"
            value={item}
            onChange={handleClickSelectItem}
          />
          {item}
        </div>
      ))}
    </S.FilterSelectBox>
  );
}
