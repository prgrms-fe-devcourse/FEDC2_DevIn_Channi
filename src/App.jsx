import AppProvider from 'providers/AppProvider';
import Router from 'router/Router';
import * as S from 'App.style';

export default function App() {
  return (
    <AppProvider>
      <S.AppContainer>
        <Router />
      </S.AppContainer>
    </AppProvider>
  );
}
