import { useEffect } from 'react';
import AppProvider from 'providers/AppProvider';
import Router from 'router/Router';
import { auth } from 'api';
import * as S from 'App.style';

export default function App() {
  const checkUserAuth = async () => {
    try {
      const response = await auth.isUserSignin();
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    checkUserAuth();
  }, []);

  return (
    <AppProvider>
      <S.AppContainer>
        <Router />
      </S.AppContainer>
    </AppProvider>
  );
}
