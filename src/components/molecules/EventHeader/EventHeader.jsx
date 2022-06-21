import { useDispatch, useSelector } from 'react-redux';
import { setFilterItem } from 'store';
import { EventHeaderNav } from 'components';
import * as S from './style';

export function EventHeader() {
  const dispatch = useDispatch();

  const getFilterItem = useSelector(state => state.filterItem.filterItem);

  const handleFilterBtnClick = () => {
    !getFilterItem.includes('온라인') && dispatch(setFilterItem('온라인'));
  };
  return (
    <S.EventHeader>
      <EventHeaderNav />
      <button type="button" onClick={handleFilterBtnClick}>
        필터
      </button>
    </S.EventHeader>
  );
}
