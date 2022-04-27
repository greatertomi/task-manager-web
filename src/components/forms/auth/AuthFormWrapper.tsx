import { Box, Typography } from '@mui/material';
import { styled as muiStyled } from '@mui/material/styles';
import React, { ReactNode } from 'react';
import { AiFillApple, AiFillFacebook } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BaseUser } from '../../../types/User';
import { MediumLogoText } from '../../brand/logo';
import FormContainer from '../../FormContainer';

const AuthPaper = styled.div<{ height?: string }>`
  border: 1px solid #dbdbdb;
  width: 450px;
  background: white;
  min-height: ${({ height }) => height || '400px'};
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

const ActionText = muiStyled(Link)(({ theme }) => ({
  marginLeft: '3px',
  textDecoration: 'none',
  color: theme.palette.primary.main,
  cursor: 'pointer',
  fontSize: '14px',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const ActionDiv = styled.div`
  font-size: 14px;
  text-align: center;
  margin-top: 20px;
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
  showLogin?: boolean;
  buttonLabel?: string;
  working?: boolean;
  showDisclaimer?: boolean;
  introText?: string;
  paperHeight?: string;
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
  showLogin,
  showDisclaimer,
  introText,
  paperHeight,
}: AuthFormWrapperProps<T>) => {
  return (
    <AuthPaper height={paperHeight}>
      <MediumLogoText />
      <Typography variant="h5" fontWeight="bold" mt={1}>
        {pageTitle}
      </Typography>
      {introText && (
        <Box color="secondary" sx={{ fontSize: '14px', my: 3 }}>
          By continuing you agree to our terms of service and privacy policy.
        </Box>
      )}
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
      <Box mt={2}>
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
      {showDisclaimer && (
        <Box sx={{ fontSize: '14px', my: 3 }}>
          By continuing you agree to our terms of service and privacy policy.
        </Box>
      )}
      {showForgotPassword && (
        <Box my={3}>
          <ActionText to="/forgotpassword" style={{ color: 'black' }}>
            Forgot your password?
          </ActionText>
        </Box>
      )}
      {(showSignUp || showLogin) && (
        <Box mt={3}>
          <HorizontalDivider />
          {showSignUp && (
            <ActionDiv>
              Don&apos;t have an account?
              <ActionText to="/signup">Sign up</ActionText>
            </ActionDiv>
          )}
          {showLogin && (
            <ActionDiv>
              {pageTitle === 'Sign up' && 'Already signed up?'}
              <ActionText to="/login">Go to Login</ActionText>
            </ActionDiv>
          )}
        </Box>
      )}
    </AuthPaper>
  );
};

export default AuthFormWrapper;
