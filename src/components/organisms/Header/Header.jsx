import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Logo, HeaderButtons, HeaderTexts } from 'components';
import * as S from './style';

export function Header({ isLogin }) {
  return (
    <S.Header>
      <S.LogoImage>
        <Link to="/">
          <Logo />
        </Link>
      </S.LogoImage>
      {isLogin ? <HeaderButtons /> : <HeaderTexts />}
    </S.Header>
  );
}

Header.propTypes = {
  isLogin: PropTypes.bool.isRequired,
};
