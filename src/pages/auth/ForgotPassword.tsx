import React from 'react';
import * as yup from 'yup';
import { AuthFormWrapper } from '../../components/forms/auth';
import SignupForm from '../../components/forms/auth/SignupForm';
import { BaseUser } from '../../types/User';
import { PageContainer } from './Login';

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
});

const initialValues = { email: '' };

const ForgotPassword = () => {
  const onSubmit = (values: BaseUser) => {
    console.log('submitting...', values);
  };

  return (
    <PageContainer>
      <AuthFormWrapper
        pageTitle="Forgot your password"
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        initialValues={initialValues}
        introText="To reset your password, please enter the email address of your account."
        showLogin
        buttonLabel="Reset my password"
        working={false}
        paperHeight="400px"
      >
        <SignupForm />
      </AuthFormWrapper>
    </PageContainer>
  );
};

export default ForgotPassword;
