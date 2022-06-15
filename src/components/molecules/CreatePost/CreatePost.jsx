import { ProfileUserImage, CreatePostInput } from 'components';
import * as S from './style';

export function CreatePost() {
  return (
    <S.CreatePost>
      <ProfileUserImage size="2.5" />
      <CreatePostInput />
    </S.CreatePost>
  );
}
