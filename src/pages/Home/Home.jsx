import { useEffect } from 'react';
import { auth } from 'api';
import * as S from './style';

export function Home() {
  useEffect(() => {
    auth.isUserSignin().then(data => {
      console.log(data);
    });
  }, []);
  return (
    <S.Container>
      <h1>Home</h1>
    </S.Container>
  );
}
