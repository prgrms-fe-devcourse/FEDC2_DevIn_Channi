import { Logo, Divider, HeaderTexts } from 'components';
import { Link } from 'react-router-dom';
import * as S from './style';

export function Header() {
  return (
    <S.Header>
      <S.LogoImage>
        <Link to="/">
          <Logo />
        </Link>
      </S.LogoImage>
      {/* <HeaderButtons /> */}
      <HeaderTexts />
      <Divider />
    </S.Header>
  );
}
