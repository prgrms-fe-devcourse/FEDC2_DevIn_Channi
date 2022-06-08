import AppProvider from 'providers/AppProvider';
import Router from 'router/Router';

export default function App() {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  );
}
