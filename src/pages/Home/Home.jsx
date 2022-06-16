import { useEffect, useState } from 'react';
import { auth } from 'api';
import { HomePage } from 'components';
import * as S from './style';

export function Home() {
  const [isLogin, setIsLogin] = useState(false);

  const temp = async () => {
    const user = await auth.isUserSignin();
    console.log(user);
    user === '' ? setIsLogin(false) : setIsLogin(true);
  };

  useEffect(() => {
    temp();
  }, []);

  return (
    <S.Container>
      <HomePage isLogin={isLogin} />
    </S.Container>
  );
}
