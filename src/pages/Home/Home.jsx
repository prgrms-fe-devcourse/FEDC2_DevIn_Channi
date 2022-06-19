import { NavTemplate, SamplePostList, CreatePost } from 'components';
import { useSelector } from 'react-redux';

export function Home() {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  return (
    <NavTemplate>
      {isLoggedIn && <CreatePost />}
      <SamplePostList isLoggedIn={isLoggedIn} />
    </NavTemplate>
  );
}
