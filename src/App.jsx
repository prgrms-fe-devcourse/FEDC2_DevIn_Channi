import { ThemeProvider } from 'styled-components';
import Hello from 'components/Hello';
import { GlobalStyle, theme } from 'styles';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Hello />
      </ThemeProvider>
    </>
  );
}
