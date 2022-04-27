import { ThemeProvider } from '@mui/material';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CustomSnackbar from './components/CustomSnackbar';
import AuthProvider from './contexts/AuthContext';
import SnackbarProvider from './contexts/SnackbarContext';
import GlobalStyle from './globalStyles';
import { AuthGuard } from './guards/AuthGuard';
import ForgotPassword from './pages/auth/ForgotPassword';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import BasePage from './pages/dashboard/BasePage';
import LandingPage from './pages/landing/LandingPage';
import { theme } from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AuthProvider>
          <SnackbarProvider>
            <GlobalStyle />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/forgotPassword" element={<ForgotPassword />} />
              <Route
                path="/dashboard"
                element={
                  <AuthGuard>
                    <BasePage />
                  </AuthGuard>
                }
              />
            </Routes>
            <CustomSnackbar />
          </SnackbarProvider>
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
