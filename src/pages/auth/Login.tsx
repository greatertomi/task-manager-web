import { useMutation } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import * as yup from 'yup';
import { AuthFormWrapper, LoginForm } from '../../components/forms/auth';
import { useAuthContext } from '../../contexts/AuthContext';
import { useSnackbarContext } from '../../contexts/SnackbarContext';
import { LOGIN_MUTATION } from '../../graphs/auth';
import { UserAuth } from '../../types/User';

export const PageContainer = styled.section`
  background-color: #fafafa;
  height: 100vh;
`;

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(4, 'Password should be of minimum 4 characters length')
    .required('Password is required'),
});

const initialValues: UserAuth = { email: 'test@gmail.com', password: 'test' };

const Login = () => {
  const [loginUser] = useMutation(LOGIN_MUTATION);
  const [loading, setLoading] = useState(false);
  const { completeLogin, isAuthenticated } = useAuthContext();
  const { updateSnackbar } = useSnackbarContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated()) {
      navigate('/dashboard');
    }
  }, []);

  const onSubmit = async (values: UserAuth) => {
    const { email, password } = values;
    setLoading(true);
    const res = await loginUser({ variables: { data: { email, password } } });
    if (res.data.login.code) {
      updateSnackbar({
        show: true,
        severity: 'error',
        message: res.data.login.message,
      });
    } else {
      completeLogin(res.data.login);
    }
    setLoading(false);
  };

  return (
    <PageContainer>
      <AuthFormWrapper
        pageTitle="Log in"
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        initialValues={initialValues}
        showOAuthButtons
        showForgotPassword
        showSignUp
        working={loading}
      >
        <LoginForm />
      </AuthFormWrapper>
    </PageContainer>
  );
};

export default Login;
