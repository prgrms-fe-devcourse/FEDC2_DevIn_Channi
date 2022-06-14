import React from 'react';
import PropTypes from 'prop-types';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from 'styles';

function ErrorFallback() {
  return <div>Somthing Went Wrong..</div>;
}

export default function AppProvider({ children }) {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <HelmetProvider>
          <GlobalStyle />
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </HelmetProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
