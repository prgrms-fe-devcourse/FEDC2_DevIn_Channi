import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Logo, HeaderTexts, HeaderButtons, CreatePost } from 'components';
import * as S from './style';

export function Header() {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  console.log('Header');
  return (
    <S.Header>
      <S.LogoImage>
        <Link to="/">
          <Logo />
        </Link>
      </S.LogoImage>
      {isLoggedIn ? <HeaderButtons /> : <HeaderTexts />}
    </S.Header>
  );
}
