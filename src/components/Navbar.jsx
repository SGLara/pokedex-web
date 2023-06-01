import { AccountCircle } from '@mui/icons-material';
import {
  AppBar, Button, IconButton, Menu, MenuItem, Toolbar, Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [auth, setAuth] = useState(true);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
        {auth && (
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
            // keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem>Log Out</MenuItem>
          </Menu>
        </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
