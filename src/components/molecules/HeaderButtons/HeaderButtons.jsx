import { HamburgerButton, IconBtn, WrapperLink } from 'components';
import * as S from './style';

export function HeaderButtons() {
  return (
    <S.HeaderButtons>
      <WrapperLink to="/notifications" type="link">
        <IconBtn icon="bell" type="button" />
      </WrapperLink>

      <HamburgerButton />
    </S.HeaderButtons>
  );
}
