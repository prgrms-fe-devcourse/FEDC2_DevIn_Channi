import { Header, FooterButtons } from 'components';
import * as S from './style';

export function HomePage() {
  return (
    <S.HomePage>
      <Header />
      <div style={{ height: 1000 }} />
      <FooterButtons />
    </S.HomePage>
  );
}
