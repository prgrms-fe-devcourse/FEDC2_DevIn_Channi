import { Divider, Icon } from 'components';
import * as S from './style';

export function FooterButtons() {
  return (
    <S.FooterButtons>
      <Divider />
      <Icon icon="house" />
      <Icon icon="calendar" />
      <Icon icon="search" />
    </S.FooterButtons>
  );
}
