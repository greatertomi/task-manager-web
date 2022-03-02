import React from 'react';
import styled from 'styled-components';
import * as yup from 'yup';
import { AuthFormWrapper, LoginForm } from '../../components/forms/auth';
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
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const initialValues: UserAuth = { email: '', password: '' };

const Login = () => {
  const onSubmit = (values: UserAuth) => {
    console.log('submitting', values);
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
        working={false}
      >
        <LoginForm />
      </AuthFormWrapper>
    </PageContainer>
  );
};

export default Login;
