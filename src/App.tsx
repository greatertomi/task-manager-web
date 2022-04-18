import { ThemeProvider } from '@mui/material';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import GlobalStyle from './globalStyles';
import ForgotPassword from './pages/auth/ForgotPassword';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import LandingPage from './pages/landing/LandingPage';
import { theme } from './theme';
import BasePage from './pages/dashboard/BasePage';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<BasePage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
