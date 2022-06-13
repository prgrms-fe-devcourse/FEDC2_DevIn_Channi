import { useEffect } from 'react';
import { auth } from 'api';
import { HomePage } from 'components';
import * as S from './style';

export function Home() {
  const temp = async () => {
    const user = await auth.isUserSignin();
    console.log(user);
  };
  useEffect(() => {
    temp();
  }, []);
  return (
    <S.Container>
      <HomePage />
    </S.Container>
  );
}

// Todo
// Header 작업 -> 로그인 상태 여부를 받아야 한다.
// Footer 작업 -> 일괄적으로 사용될 Home, Event, Search Icons을 정렬한다.
