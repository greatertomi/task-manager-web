import { Box, Typography } from '@mui/material';
import React from 'react';
import { AiFillApple, AiFillFacebook } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import styled from 'styled-components';

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

const Login = () => {
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
      </AuthPaper>
    </PageContainer>
  );
};

export default Login;
