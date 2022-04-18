import { Box } from '@mui/material';
import { styled as muiStyled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { AiOutlineHome, AiOutlineMenu } from 'react-icons/ai';

const NavbarContainer = muiStyled('div')(({ theme }) => ({
  height: '40px',
  width: '100%',
  background: theme.palette.primary.main,
  color: theme.palette.text.secondary,
  display: 'flex',
  alignItems: 'center',
}));

const useStyles = makeStyles((theme) => ({
  icon: {
    cursor: 'pointer',
    padding: '2px 4px',
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.2)',
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <NavbarContainer>
      <Box
        sx={{
          display: 'flex',
          pl: 5,
          gap: 1,
        }}
      >
        <div className={classes.icon}>
          <AiOutlineMenu size={22} />
        </div>
        <div className={classes.icon}>
          <AiOutlineHome size={22} />
        </div>
      </Box>
    </NavbarContainer>
  );
};

export default Navbar;
