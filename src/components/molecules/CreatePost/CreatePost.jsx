import { ProfileUserImage, CreatePostInput, WrapperLink } from 'components';

import * as S from './style';

export function CreatePost() {
  return (
    <WrapperLink to="/posts/create" type="link">
      <S.CreatePost>
        <ProfileUserImage size={2.5} />
        <CreatePostInput />
      </S.CreatePost>
    </WrapperLink>
  );
}
