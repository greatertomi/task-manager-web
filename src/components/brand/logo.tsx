import { styled as muiStyled } from '@mui/material/styles';
import React from 'react';
import { Link } from 'react-router-dom';

const MediumLogo = muiStyled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.main,
  cursor: 'pointer',
  fontSize: '24px',
  fontWeight: 'bold',
}));

export const MediumLogoText = () => (
  <MediumLogo to="/">Task Manager</MediumLogo>
);
