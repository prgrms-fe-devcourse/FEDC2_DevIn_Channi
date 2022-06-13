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
