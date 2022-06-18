import { NotificationList } from 'components';
import * as S from './style';

export function NotificationArea() {
  return (
    <S.Container>
      <h1>알림</h1>

      <NotificationList userName="염상권" />
    </S.Container>
  );
}
