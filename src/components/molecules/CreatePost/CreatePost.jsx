import { useSelector } from 'react-redux';
import { Avatar, CreatePostInput, WrapperLink } from 'components';
import * as S from './style';

export function CreatePost() {
  const { user } = useSelector(state => state.user);
  return (
    <WrapperLink to="/posts/create" type="link">
      <S.CreatePost>
        <Avatar alt="" src={user.image} />
        <CreatePostInput />
      </S.CreatePost>
    </WrapperLink>
  );
}
