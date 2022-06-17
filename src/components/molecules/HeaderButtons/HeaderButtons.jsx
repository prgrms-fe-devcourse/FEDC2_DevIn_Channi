import { HamburgerButton, Icon } from 'components';
import { Link } from 'react-router-dom';
import * as S from './style';

export function HeaderButtons() {
  return (
    <S.HeaderButtons>
      <Link to="/notifications">
        <Icon icon="bell" />
      </Link>
      <HamburgerButton />
    </S.HeaderButtons>
  );
}
