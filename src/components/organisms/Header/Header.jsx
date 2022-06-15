import { HeaderTexts, Logo, Divider } from 'components';
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
      <HeaderTexts />
      <Divider />
    </S.Header>
  );
}
