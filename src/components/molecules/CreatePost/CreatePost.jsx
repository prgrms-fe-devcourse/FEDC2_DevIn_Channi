import { ProfileUserImage, CreatePostInput } from 'components';
import { Link } from 'react-router-dom';
import * as S from './style';

export function CreatePost() {
  return (
    <Link to="/posts/create">
      <S.CreatePost>
        <ProfileUserImage size={2.5} />
        <CreatePostInput />
      </S.CreatePost>
    </Link>
  );
}
