import { NavTemplate, EventHeader, EventItemList } from 'components';
import * as S from './style';

export function Event() {
  return (
    <NavTemplate>
      <S.Container>
        <EventHeader />
        <EventItemList />
      </S.Container>
    </NavTemplate>
  );
}
