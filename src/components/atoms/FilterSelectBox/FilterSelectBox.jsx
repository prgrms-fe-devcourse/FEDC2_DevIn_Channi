import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { setFilterItem, setInitFilterItem } from 'store';
import { nanoid } from 'nanoid';
import { FILTER_ITEM } from 'assets';
import { useState } from 'react';
import * as S from './style';

export function FilterSelectBox({ isOpen }) {
  console.log('box!!!');
  const filterItems = FILTER_ITEM;
  const dispatch = useDispatch();
  const [, reRendering] = useState();

  const handleClickSelectItem = e => {
    dispatch(setFilterItem(e.target.value));
  };

  const handleClickInit = () => {
    dispatch(setInitFilterItem());
    reRendering({});
  };
  return (
    <S.FilterSelectBox isOpen={isOpen}>
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
      <button type="button" onClick={handleClickInit}>
        초기화
      </button>
    </S.FilterSelectBox>
  );
}

FilterSelectBox.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
