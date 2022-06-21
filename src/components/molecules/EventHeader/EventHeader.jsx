import { useState } from 'react';
import { EventHeaderNav, Icon, Span, FilterSelectBox } from 'components';
import * as S from './style';

export function EventHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const handleFilterBtnClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <S.EventHeader>
      <EventHeaderNav />
      <S.FilterButton onClick={handleFilterBtnClick}>
        <Icon icon="filter" />
        <Span>Filter</Span>
      </S.FilterButton>
      {isOpen && <FilterSelectBox />}
    </S.EventHeader>
  );
}
