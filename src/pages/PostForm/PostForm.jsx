import { PostFormPage } from 'components';

export function PostForm() {
  // 라우트에 따라서 데이터 전달 O/X
  // posts/create
  // posts/:postId/update

  // :postId가 없어서 데이터를 불러오지 못하면 -> 404로

  return <PostFormPage />;
}
