import { Divider } from 'components';
import * as S from './style';

export function EventHeaderNav() {
  return (
    <S.EventHeaderNav>
      <span>이벤트</span>
      <Divider type="vertical" />
      <span>모임</span>
    </S.EventHeaderNav>
  );
}
