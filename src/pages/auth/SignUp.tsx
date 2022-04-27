import { gql, useMutation } from '@apollo/client';
import React, { useState } from 'react';
import * as yup from 'yup';
import { AuthFormWrapper } from '../../components/forms/auth';
import SignupForm from '../../components/forms/auth/SignupForm';
import { useAuthContext } from '../../contexts/AuthContext';
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

const SIGNUP_MUTATION = gql`
  mutation registerMutation($data: SignupInput!) {
    signUp(data: $data) {
      token
      user {
        id
        firstName
        lastName
        email
      }
    }
  }
`;

const SignUp = () => {
  const [createUser] = useMutation(SIGNUP_MUTATION);
  const { completeLogin } = useAuthContext();
  const [loading, setLoading] = useState(false);

  // todo -> display error in snackbar
  const onSubmit = async (values: User) => {
    const { firstName, lastName, email, password } = values;
    setLoading(true);
    const res = await createUser({
      variables: { data: { firstName, lastName, email, password } },
    });
    console.log('response', res.data.signUp);
    completeLogin(res.data.signUp);
    setLoading(false);
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
        working={loading}
      >
        <SignupForm />
      </AuthFormWrapper>
    </PageContainer>
  );
};

export default SignUp;
