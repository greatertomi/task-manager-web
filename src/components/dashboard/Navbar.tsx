import { Avatar, Box, IconButton, Menu, MenuItem } from '@mui/material';
import { grey } from '@mui/material/colors';
import { styled as muiStyled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import {
  AiOutlineBell,
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlinePlus,
} from 'react-icons/ai';
import { useAuthContext } from '../../contexts/AuthContext';

const NavbarContainer = muiStyled('div')(({ theme }) => ({
  height: '40px',
  width: '100%',
  background: theme.palette.primary.main,
  color: theme.palette.text.secondary,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const useStyles = makeStyles(() => ({
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
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { logout } = useAuthContext();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    logout();
  };

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
      <Box sx={{ display: 'flex', pr: 5, gap: 1, alignItems: 'center' }}>
        <div className={classes.icon}>
          <AiOutlinePlus size={22} />
        </div>
        <div className={classes.icon}>
          <AiOutlineBell size={22} />
        </div>
        <div>
          <IconButton
            onClick={handleClick}
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar
              sx={{
                bgcolor: grey,
                height: '28px',
                width: '28px',
                fontSize: '14px',
                color: 'black',
                cursor: 'pointer',
              }}
            >
              N
            </Avatar>
          </IconButton>
          <Menu
            open={open}
            id="basic-menu"
            anchorEl={anchorEl}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </div>
      </Box>
    </NavbarContainer>
  );
};

export default Navbar;
