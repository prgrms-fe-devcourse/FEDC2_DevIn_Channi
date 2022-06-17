import { Link } from 'react-router-dom';
import * as S from './style';

export function HamburgerList() {
  return (
    <S.HamburgerList>
      <Link to="profile">내 프로필</Link>
      <Link to="myInfo">내 정보 수정</Link>
      <Link to="logout">로그아웃</Link>
    </S.HamburgerList>
  );
}
