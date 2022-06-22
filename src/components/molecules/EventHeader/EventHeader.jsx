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
      {console.log('open??', isOpen)}
      <EventHeaderNav
        onTabChange={change => {
          setIsOpen(change);
        }}
      />
      <S.FilterButton onClick={handleFilterBtnClick}>
        <Icon icon="filter" />
        <Span>Filter</Span>
      </S.FilterButton>
      <FilterSelectBox isOpen={isOpen} />
    </S.EventHeader>
  );
}
