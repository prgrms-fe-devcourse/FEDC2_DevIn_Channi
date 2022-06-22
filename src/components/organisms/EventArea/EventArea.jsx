import { EventHeader, EventItemList } from 'components';
import * as S from './style';

export function EventArea() {
  return (
    <S.Container>
      <EventHeader />
      <EventItemList />
    </S.Container>
  );
}
