import { Icon } from 'components';
import { Link } from 'react-router-dom';
import * as S from './style';

export function FooterButtons() {
  return (
    <S.FooterButtons>
      <Link to="/">
        <Icon icon="house" />
      </Link>
      <Link to="/events">
        <Icon icon="calendar" />
      </Link>
      <Link to="/search">
        <Icon icon="search" />
      </Link>
    </S.FooterButtons>
  );
}
