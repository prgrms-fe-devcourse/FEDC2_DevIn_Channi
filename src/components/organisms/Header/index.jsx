import { HeaderButtons, Logo } from 'components';
import * as S from './style';

export function Header() {
  return (
    <S.Header>
      <Logo />
      <HeaderButtons />
    </S.Header>
  );
}

// prop drilling
//
