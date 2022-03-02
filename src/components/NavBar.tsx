import { Box, styled as muiStyled, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainerStyle = styled.div`
  background: white;
  padding: 15px 40px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
  position: sticky;
  top: 0;
`;

const NavLink = muiStyled(Link)(({ theme }) => ({
  padding: '0 10px',
  textDecoration: 'none',
  color: 'inherit',
  '&:hover': {
    color: theme.palette.primary.main,
    cursor: 'pointer',
  },
}));

const NavBar = () => {
  return (
    <NavbarContainerStyle>
      <Typography variant="h5" color="primary" fontWeight="bold">
        TaskManager
      </Typography>
      <Box display="flex" gap={1}>
        <NavLink to="/login">
          <Typography variant="h6">Login</Typography>
        </NavLink>
        <NavLink to="/signup">
          <Typography variant="h6">Register</Typography>
        </NavLink>
      </Box>
    </NavbarContainerStyle>
  );
};

export default NavBar;
