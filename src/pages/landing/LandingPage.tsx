import { Button, Typography } from '@mui/material';
import React from 'react';
import NavBar from '../../components/NavBar';
import { ReactComponent as Icon } from '../../icons/recruiting.svg';

const TopPage = () => {
  return (
    <div>
      <Typography variant="h2">Organize it all with Task Manager</Typography>
      <Button color="primary" size="large" variant="contained">
        Get Started
      </Button>
      <Icon />
      {/* <img src={dancingImage} alt="top page" /> */}
    </div>
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
