import { NavTemplate, EventArea } from 'components';
import * as S from './style';

export function Event() {
  return (
    <NavTemplate>
      <S.Container>
        <EventArea />
      </S.Container>
    </NavTemplate>
  );
}
