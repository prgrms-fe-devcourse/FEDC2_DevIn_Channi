import { Header, Footer, CreatePost, SamplePostList } from 'components';
import { useSelector } from 'react-redux';
import * as S from './style';

export function HomePage() {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  return (
    <S.HomePage>
      <Header />
      {isLoggedIn && <CreatePost />}
      <SamplePostList isLoggedIn={isLoggedIn} />
      <Footer />
    </S.HomePage>
  );
}
