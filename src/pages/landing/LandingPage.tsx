import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { ReactComponent as LandingIcon } from '../../assets/manbook.svg';
import NavBar from '../../components/NavBar';
import { AppContainer } from '../../globalStyles';
import Footer from './Footer';
import PageRow from './PageRow';

const TopPageStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
`;

const TopPageTextStyle = styled(TopPageStyle)`
  gap: 20px;
  margin: 20px 0 10px 0;
  justify-self: center;

  @media screen and (min-width: 600px) {
    width: 500px;
  }
`;

const TopPageIcon = styled(LandingIcon)`
  width: 100%;
`;

const TopPage = () => {
  return (
    <AppContainer>
      <TopPageStyle>
        <TopPageTextStyle>
          <Typography variant="h2" textAlign="center">
            Organize it all with Task Manager
          </Typography>
        </TopPageTextStyle>
        <Button color="primary" size="large" variant="contained">
          Get Started
        </Button>
        <Box>
          <TopPageIcon />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={3}
          sx={{ margin: '0 40px' }}
        >
          <Typography variant="h3">Free up your mental space</Typography>
          <Typography fontSize={20}>
            Regain clarity and calmness by getting all those tasks out of your
            head and onto your to-do list (no matter where you are or what
            device you use).
          </Typography>
        </Box>
      </TopPageStyle>
    </AppContainer>
  );
};

const LandingPage = () => {
  return (
    <>
      <NavBar />
      <TopPage />
      <PageRow />
      <Footer />
    </>
  );
};

export default LandingPage;
