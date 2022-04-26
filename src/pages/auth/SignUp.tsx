import { gql, useQuery } from '@apollo/client';
import React from 'react';
import * as yup from 'yup';
import { AuthFormWrapper } from '../../components/forms/auth';
import SignupForm from '../../components/forms/auth/SignupForm';
import { User } from '../../types/User';
import { PageContainer } from './Login';

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(4, 'Password is too short')
    .max(200, 'Password is too long'),
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
});

const initialValues = { email: '', password: '', firstName: '', lastName: '' };

const HELLO_QUERY = gql`
  {
    hello
  }
`;

const SignUp = () => {
  const { data, loading, error } = useQuery(HELLO_QUERY);

  console.log({ data, loading, error });
  const onSubmit = (values: User) => {
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
        buttonLabel="Sign up"
        working={false}
      >
        <SignupForm />
      </AuthFormWrapper>
    </PageContainer>
  );
};

export default SignUp;
