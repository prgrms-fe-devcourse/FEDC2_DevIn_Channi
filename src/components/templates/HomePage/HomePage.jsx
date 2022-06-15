import { Header, Footer, CreatePost, SamplePostList } from 'components';
import * as S from './style';

export function HomePage() {
  return (
    <S.HomePage>
      <Header />
      <CreatePost />
      <SamplePostList />
      <Footer />
    </S.HomePage>
  );
}
