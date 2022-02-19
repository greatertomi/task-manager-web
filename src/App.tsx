import { ThemeProvider } from '@mui/material';
import React from 'react';
import './App.css';
import LandingPage from './pages/landing/LandingPage';
import { theme } from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <LandingPage />
    </ThemeProvider>
  );
};

export default App;
