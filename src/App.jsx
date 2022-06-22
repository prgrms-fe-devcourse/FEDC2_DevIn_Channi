import AppProvider from 'providers/AppProvider';
import Router from 'router/Router';
import * as S from 'App.style';
import { StrictMode } from 'react';

export default function App() {
  return (
    <StrictMode>
      <AppProvider>
        <S.AppContainer>
          <Router />
        </S.AppContainer>
      </AppProvider>
    </StrictMode>
  );
}
