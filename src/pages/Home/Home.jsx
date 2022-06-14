import { useEffect, useState } from 'react';
import { auth } from 'api';
import { HomePage } from 'components';
import * as S from './style';

export function Home() {
  const [isSignIn, setIsSignIn] = useState(false);

  const temp = async () => {
    const user = await auth.isUserSignin();
    console.log(user, typeof user);
    if (user === '') setIsSignIn(false);
    if (user !== '') setIsSignIn(true);
  };

  useEffect(() => {
    temp();
  }, []);

  useEffect(() => {
    console.log('isSignIn', isSignIn);
  }, [isSignIn]);
  return (
    <S.Container>
      <HomePage isSignIn={isSignIn} />
    </S.Container>
  );
}
