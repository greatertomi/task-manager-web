import { Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  background: white;
  padding: 30px 60px;
  display: flex;
  justify-content: space-between;
`;

const NavLinkContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const NavBar = () => {
  return (
    <NavbarContainer>
      <Typography variant="h5">Task Manager</Typography>
      <NavLinkContainer>
        <Typography variant="body1">Register</Typography>
        <Typography variant="body1">Login</Typography>
      </NavLinkContainer>
    </NavbarContainer>
  );
};

export default NavBar;
