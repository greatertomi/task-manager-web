import { Button, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { ReactComponent as LandingIcon } from '../../assets/recruiting.svg';
import NavBar from '../../components/NavBar';

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
    <TopPageStyle>
      <TopPageTextStyle>
        <Typography variant="h2">Organize it all</Typography>
        <Typography variant="h2">with Task Manager</Typography>
      </TopPageTextStyle>
      <Button color="primary" size="large" variant="contained">
        Get Started
      </Button>
      <LandingIcon />
    </TopPageStyle>
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
