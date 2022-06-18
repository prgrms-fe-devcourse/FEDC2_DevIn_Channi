import { EventHeaderNav } from 'components';
import * as S from './style';

export function EventHeader() {
  return (
    <S.EventHeader>
      <EventHeaderNav />
      <button type="button">필터</button>
    </S.EventHeader>
  );
}
