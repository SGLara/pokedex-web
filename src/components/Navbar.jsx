/* eslint-disable react/prop-types */
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({
  isSignedIn, setIsSignedIn, firebaseAuth,
}) {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const user = firebaseAuth.currentUser;

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogOut = () => {
    firebaseAuth.signOut()
      .then(() => {
        setIsSignedIn(false);
        setAnchorElUser(null);
      })
      .catch((error) => {
      });
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              display: { xs: 'none', sm: 'flex' },
              mr: 2,
            }}
          >
            POKÉDEX
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography
                  textAlign="center"
                  component={Link}
                  to="/regions"
                  sx={{
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                >
                  Region List
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography
                  textAlign="center"
                  component={Link}
                  to="/my-teams"
                  sx={{
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                >
                  My Teams
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Typography
            variant="h5"
            component="div"
            sx={{
              flexGrow: 1,
              mr: 2,
              display: { xs: 'flex', sm: 'none' },
            }}
          >
            POKÉDEX
          </Typography>
          <Box sx={{
            flexGrow: 1,
            display: { xs: 'none', md: 'flex' },
          }}
          >
            <ButtonGroup>
              <Button
                component={Link}
                variant="outlined"
                to="/regions"
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
            </ButtonGroup>
          </Box>

          {isSignedIn && (
          <Box>
            <IconButton
              size="large"
              onClick={handleOpenUserMenu}
            >
              <Avatar src={user.photoURL} alt={user.displayName} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleLogOut}>Log Out</MenuItem>
            </Menu>
          </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
