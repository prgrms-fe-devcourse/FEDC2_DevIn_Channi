import { ProfileUserImage, CreatePostInput } from 'components';
import * as S from './style';

export function CreatePost() {
  return (
    <S.CreatePost>
      <ProfileUserImage />
      <CreatePostInput />
    </S.CreatePost>
  );
}
