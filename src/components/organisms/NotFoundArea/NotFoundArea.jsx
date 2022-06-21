import * as S from './style';

export function NotFoundArea() {
  return (
    <S.Container>
      <h1>404</h1>
      <p>페이지를 찾을 수 없습니다.</p>
      <S.Button to="/">홈으로 이동</S.Button>
    </S.Container>
  );
}
