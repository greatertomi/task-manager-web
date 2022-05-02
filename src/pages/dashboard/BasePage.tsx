import { Box, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import Navbar from '../../components/dashboard/Navbar';
import SideNav from '../../components/dashboard/SideNav';
import Task from '../../components/dashboard/tasks/Task';
import { useAuthContext } from '../../contexts/AuthContext';

const PageBodyStyles = styled.div`
  padding: 30px 10px 50px 15%;
`;

const BasePage = () => {
  const { profile } = useAuthContext();

  return (
    <>
      <Navbar />
      <Box sx={{ display: 'flex' }}>
        <SideNav />
        <PageBodyStyles>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <h2>Today</h2>
            <Typography sx={{ fontSize: '12px', margin: '10px 0 0 2px' }}>
              15 Aug, 2022
            </Typography>
          </Box>
          <Box mt={2}>Welcome, {profile?.firstName}.</Box>
          <Task />
        </PageBodyStyles>
      </Box>
    </>
  );
};

export default BasePage;
