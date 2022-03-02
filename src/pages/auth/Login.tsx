import { Box, Button, Typography } from '@mui/material';
import { useFormikContext } from 'formik';
import React from 'react';
import { AiFillApple, AiFillFacebook } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import * as yup from 'yup';
import FormContainer from '../../components/FormContainer';
import { PasswordInput, TextInput } from '../../components/inputs';
import { UserAuth } from '../../types/User';

const PageContainer = styled.section`
  background-color: #fafafa;
  height: 100vh;
`;

const AuthPaper = styled.div`
  border: 1px solid #dbdbdb;
  width: 450px;
  background: white;
  height: 650px;
  position: fixed;
  left: calc(50% - (450px / 2));
  top: 50px;
  padding: 20px;
`;

const OAuthButton = styled.button`
  background: #fff;
  height: 40px;
  outline: none;
  border: 1px solid #ddd;
  text-align: center;
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-top: 10px;
  &:hover {
    background: #eeeeee;
    border-color: #929292;
  }
`;

const HorizontalDivider = styled.div`
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #ddd;
  line-height: 0.1em;
  margin: 10px 0;

  span {
    background: #fff;
    padding: 0 15px;
    color: #777777;
    font-size: 14px;
  }
`;

const SignupText = styled(Link)`
  margin-left: 3px;
  text-decoration: none;
  color: black;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
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

  const { values, handleChange, errors } = useFormikContext<UserAuth>();

  return (
    <PageContainer>
      <AuthPaper>
        <Typography variant="h6" color="primary">
          Task Manager
        </Typography>
        <Typography variant="h5" fontWeight="bold" mt={1}>
          Log in
        </Typography>
        <Box my={3}>
          <OAuthButton>
            <FcGoogle size={20} />
            Continue with Google
          </OAuthButton>
          <OAuthButton>
            <AiFillFacebook size={20} color="#3D5A99" />
            Continue with Facebook
          </OAuthButton>
          <OAuthButton>
            <AiFillApple size={20} />
            Continue with Apple
          </OAuthButton>
        </Box>
        <HorizontalDivider>
          <span>OR</span>
        </HorizontalDivider>
        <FormContainer
          onSubmit={onSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
          working={false}
          buttonLabel="Log in"
        >
          <TextInput
            label="Email"
            name="email"
            value={values.email}
            onChange={handleChange}
            formError={errors.email}
          />
          <PasswordInput
            label="Password"
            name="password"
            value={values.password}
            onChange={handleChange}
            formError={errors.password}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Log in
          </Button>
        </FormContainer>
        <Box my={3}>
          <SignupText to="/">Forgot your password?</SignupText>
        </Box>
        <HorizontalDivider />
        <Box>
          <Typography>
            Don&apos;t have an account?
            <SignupText to="/">Sign up</SignupText>
          </Typography>
        </Box>
      </AuthPaper>
    </PageContainer>
  );
};

export default Login;
