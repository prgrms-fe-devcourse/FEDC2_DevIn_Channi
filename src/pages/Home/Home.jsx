import { NavTemplate, SamplePostList, CreatePost } from 'components';
import { useSelector } from 'react-redux';
import * as S from './style';

export function Home() {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  return (
    <NavTemplate>
      {isLoggedIn && (
        <S.FixedItem>
          <CreatePost />
        </S.FixedItem>
      )}
      <S.Container isLoggedIn={isLoggedIn}>
        <SamplePostList />
      </S.Container>
    </NavTemplate>
  );
}
