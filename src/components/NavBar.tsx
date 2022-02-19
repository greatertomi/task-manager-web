import { Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const NavbarContainerStyle = styled.div`
  background: white;
  padding: 10px 40px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
`;

const NavLinkContainerStyle = styled.div`
  display: flex;
  gap: 20px;
  .link {
    padding: 0 10px;
    height: 100%;
    &:hover {
      background: #f1f1f1;
      cursor: pointer;
      border-radius: 15px;
      text-decoration: underline;
      text-decoration-color: ${(props) => props.theme.palette.primary.main};
    }
  }
`;

const NavBar = () => {
  return (
    <NavbarContainerStyle>
      <Typography variant="h5" color="primary">
        Task Manager
      </Typography>
      <NavLinkContainerStyle>
        <Typography variant="body1" className="link">
          Register
        </Typography>
        <Typography variant="body1" className="link">
          Login
        </Typography>
      </NavLinkContainerStyle>
    </NavbarContainerStyle>
  );
};

export default NavBar;
