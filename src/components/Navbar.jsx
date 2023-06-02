import { AccountCircle } from '@mui/icons-material';
import {
  AppBar, Button, IconButton, Menu, MenuItem, Toolbar, Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function Navbar({ isSignedIn, setIsSignedIn, firebaseAuth }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    // eslint-disable-next-line react/prop-types
    firebaseAuth.signOut()
      .then(() => {
        setIsSignedIn(false);
        setAnchorEl(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <AppBar position="fixed" color="primary">
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="h6" component="div">
          POKÉDEX
        </Typography>
        <div style={{
          display: 'flex',
          gap: '1.5rem',
        }}
        >
          <Button
            component={Link}
            variant="outlined"
            to="/"
          >
            Region List
          </Button>
          <Button
            component={Link}
            variant="outlined"
            to="/my-teams"
          >
            My Teams
          </Button>
        </div>
        {isSignedIn && (
        <div>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleLogOut}>Log Out</MenuItem>
          </Menu>
        </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
