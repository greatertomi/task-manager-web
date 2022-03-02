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

const SignUp = () => {
  const onSubmit = (values: BaseUser) => {
    console.log('submitting', values);
  };

  return (
    <PageContainer>
      <AuthFormWrapper
        pageTitle="Sign up"
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        initialValues={initialValues}
        showOAuthButtons
        showLogin
        showDisclaimer
        buttonLabel="Sign up with Email"
        working={false}
      >
        <SignupForm />
      </AuthFormWrapper>
    </PageContainer>
  );
};

export default SignUp;
