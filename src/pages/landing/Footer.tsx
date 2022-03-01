import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { ReactComponent as BoardLady } from '../../assets/lady_board.svg';

const FooterContainer = styled.div`
  background: #eff1ff;
  padding: 50px 0;
`;

export const HorizontalLine = styled.hr`
  border-top: 1px solid #dbd6d2;
  width: 100%;
  z-index: 50;
  margin-top: 30px;
`;

const FooterIcon = styled(BoardLady)`
  height: 300px;
  width: 500px;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const FooterActionText = styled.div`
  align-self: center;
  justify-self: center;
  margin-left: 50px;

  @media only screen and (min-width: 768px) {
    width: 500px;
  }

  @media only screen and (max-width: 768px) {
    margin-left: 0;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Box display="flex">
          <FooterIcon />
          <FooterActionText>
            <Typography variant="h3">
              Achieve peace of mind with Task Manager
            </Typography>
            <Box mt={3}>
              <Button variant="contained" color="primary" size="large">
                Get Started
              </Button>
            </Box>
          </FooterActionText>
        </Box>
        <HorizontalLine />
        <Box mt={2}>
          <Typography textAlign="center">&copy; John Oshalusi 2022</Typography>
        </Box>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
