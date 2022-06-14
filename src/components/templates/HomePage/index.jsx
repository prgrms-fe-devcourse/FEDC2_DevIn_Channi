import { Header, Footer, SamplePostList } from 'components';
import * as S from './style';

export function HomePage() {
  return (
    <S.HomePage>
      <Header />
      <SamplePostList />
      <Footer />
    </S.HomePage>
  );
}
