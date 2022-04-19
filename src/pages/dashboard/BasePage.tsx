import { Box } from '@mui/material';
import React from 'react';
import Navbar from '../../components/dashboard/Navbar';
import SideNav from '../../components/dashboard/SideNav';

const BasePage = () => {
  return (
    <>
      <Navbar />
      <Box sx={{ display: 'flex' }}>
        <SideNav />
        <p>This is the base page</p>
      </Box>
    </>
  );
};

export default BasePage;
