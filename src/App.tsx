import { ThemeProvider } from '@mui/material';
import React from 'react';
import './App.css';
import GlobalStyle from './globalStyles';
import LandingPage from './pages/landing/LandingPage';
import { theme } from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <LandingPage />
    </ThemeProvider>
  );
};

export default App;
