import { Icon, WrapperLink } from 'components';
import * as S from './style';

export function FooterButtons() {
  return (
    <S.FooterButtons>
      <WrapperLink to="/" type="link">
        <Icon icon="house" type="button" />
      </WrapperLink>
      <WrapperLink to="/events" type="link">
        <Icon icon="calendar" type="button" />
      </WrapperLink>
      <WrapperLink to="/search" type="link">
        <Icon icon="search" type="button" />
      </WrapperLink>
    </S.FooterButtons>
  );
}
