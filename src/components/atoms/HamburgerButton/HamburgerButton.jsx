import { Icon, HamburgerList } from 'components';
import * as S from './style';

export function HamburgerButton() {
  return (
    <S.HamburgerButton>
      <Icon icon="bars" />
      {false && <HamburgerList />}
    </S.HamburgerButton>
  );
}
