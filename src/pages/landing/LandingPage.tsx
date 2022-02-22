import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { ReactComponent as LandingIcon } from '../../assets/manbook.svg';
import NavBar from '../../components/NavBar';
import PageRow from './PageRow';

const TopPageStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TopPageTextStyle = styled(TopPageStyle)`
  gap: 20px;
  margin: 20px 0 10px 0;
`;

const TopPage = () => {
  return (
    <>
      <TopPageStyle>
        <TopPageTextStyle>
          <Typography variant="h2">Organize it all</Typography>
          <Typography variant="h2">with Task Manager</Typography>
        </TopPageTextStyle>
        <Button color="primary" size="large" variant="contained">
          Get Started
        </Button>
        <LandingIcon />
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={3}
          sx={{ margin: '0 40px' }}
        >
          <Typography variant="h3">Free up your mental space</Typography>
          <Box>
            <Typography fontSize={20}>
              Regain clarity and calmness by getting all those tasks out of your
              head and
            </Typography>
            <Typography fontSize={20}>
              onto your to-do list (no matter where you are or what device you
              use).
            </Typography>
          </Box>
        </Box>
      </TopPageStyle>
      <PageRow />
    </>
  );
};

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <TopPage />
    </div>
  );
};

export default LandingPage;
