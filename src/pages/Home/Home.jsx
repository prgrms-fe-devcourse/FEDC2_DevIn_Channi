import { NavTemplate, SamplePostList, CreatePost } from 'components';
import { useSelector } from 'react-redux';
import * as S from './style';

export function Home() {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  return (
    <NavTemplate>
      <S.Container>
        <SamplePostList isLoggedIn={isLoggedIn} />
      </S.Container>
    </NavTemplate>
  );
}
