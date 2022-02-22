import { Box, styled as muiStyled, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const NavbarContainerStyle = styled.div`
  background: white;
  padding: 10px 40px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
`;

const NavLinkStyle = muiStyled(Typography)(({ theme }) => ({
  padding: '0 10px',
  height: '100%',
  fontWeight: 'bold',
  variant: 'h5',
  '&:hover': {
    color: theme.palette.primary.main,
    cursor: 'pointer',
    borderRadius: '15px',
  },
}));

const NavBar = () => {
  return (
    <NavbarContainerStyle>
      <Typography variant="h5" color="primary">
        Task Manager
      </Typography>
      <Box display="flex" gap={1}>
        <NavLinkStyle>Register</NavLinkStyle>
        <NavLinkStyle>Login</NavLinkStyle>
      </Box>
    </NavbarContainerStyle>
  );
};

export default NavBar;
