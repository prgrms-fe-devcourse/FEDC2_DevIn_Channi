import { Divider, HeaderButtons, Logo } from 'components';
import * as S from './style';

export function Header() {
  return (
    <S.Header>
      <Logo />
      <HeaderButtons />
      <Divider />
    </S.Header>
  );
}

// prop drilling
//
