import { Divider, HeaderTexts, Logo } from 'components';
import * as S from './style';

export function Header() {
  return (
    <S.Header>
      <S.LogoImage>
        <Logo />
      </S.LogoImage>
      {/* <HeaderButtons /> */}
      <HeaderTexts />
      <Divider />
    </S.Header>
  );
}
