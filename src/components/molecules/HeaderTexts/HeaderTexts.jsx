import { Link } from 'react-router-dom';
import * as S from './style';

export function HeaderTexts() {
  return (
    <S.HeaderTexts>
      <Link to="/signin">로그인</Link>
      <Link to="/signup">회원가입</Link>
    </S.HeaderTexts>
  );
}
