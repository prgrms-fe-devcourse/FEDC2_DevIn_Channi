import { Divider, HeaderButtons, HeaderTexts, Logo } from 'components';
import PropTypes from 'prop-types';
import * as S from './style';

export function Header({ isSignIn }) {
  return (
    <S.Header>
      <S.LogoImage>
        <Logo />
      </S.LogoImage>
      {isSignIn ? <HeaderButtons /> : <HeaderTexts />}
      <Divider />
    </S.Header>
  );
}

Header.propTypes = {
  isSignIn: PropTypes.bool.isRequired,
};
