import { Icon } from 'components';
import * as S from './style';

export function FooterButtons() {
  return (
    <S.FooterButtons>
      <div className="icons">
        <Icon icon="house" />
      </div>
      <div className="icons">
        <Icon icon="calendar" />
      </div>
      <div className="icons">
        <Icon icon="search" />
      </div>
    </S.FooterButtons>
  );
}
