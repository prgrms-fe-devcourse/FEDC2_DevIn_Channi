import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from 'styles';

export default function AppProvider({ children }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
