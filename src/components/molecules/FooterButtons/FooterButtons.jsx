import { IconBtn, WrapperLink } from 'components';
import * as S from './style';

export function FooterButtons() {
  return (
    <S.FooterButtons>
      <WrapperLink to="/" type="link">
        <IconBtn icon="house" type="button" />
      </WrapperLink>
      <WrapperLink to="/events" type="link">
        <IconBtn icon="calendar" type="button" />
      </WrapperLink>
      <WrapperLink to="/search" type="link">
        <IconBtn icon="search" type="button" />
      </WrapperLink>
    </S.FooterButtons>
  );
}
