import { Box, Typography } from '@mui/material';
import React, { ReactNode } from 'react';
import { AiFillApple, AiFillFacebook } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BaseUser } from '../../../types/User';
import FormContainer from '../../FormContainer';

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

interface AuthFormWrapperProps<T> {
  pageTitle: string;
  showOAuthButtons?: boolean;
  onSubmit: (values: T) => void;
  validationSchema: any;
  initialValues: T;
  children: ReactNode | ReactNode[];
  showForgotPassword?: boolean;
  showSignUp?: boolean;
  buttonLabel?: string;
  working?: boolean;
}

const AuthFormWrapper = <T extends BaseUser>({
  pageTitle,
  initialValues,
  validationSchema,
  showOAuthButtons,
  showSignUp,
  showForgotPassword,
  onSubmit,
  children,
  buttonLabel,
  working,
}: AuthFormWrapperProps<T>) => {
  return (
    <AuthPaper>
      <Typography variant="h6" color="primary">
        Task Manager
      </Typography>
      <Typography variant="h5" fontWeight="bold" mt={1}>
        {pageTitle}
      </Typography>
      {showOAuthButtons && (
        <>
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
        </>
      )}
      <Box mt={1}>
        <FormContainer
          onSubmit={onSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
          working={working}
          buttonLabel={buttonLabel || pageTitle}
        >
          {children}
        </FormContainer>
      </Box>
      {showForgotPassword && (
        <Box my={3}>
          <SignupText to="/">Forgot your password?</SignupText>
        </Box>
      )}
      {showSignUp && (
        <>
          <HorizontalDivider />
          <Box>
            <Typography>
              Don&apos;t have an account?
              <SignupText to="/">Sign up</SignupText>
            </Typography>
          </Box>
        </>
      )}
    </AuthPaper>
  );
};

export default AuthFormWrapper;
