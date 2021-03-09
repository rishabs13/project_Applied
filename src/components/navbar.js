import React from 'react'
import {
  AppBar,
  Button,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Toolbar
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { AccountCircle } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  toolbar: {
    justifyContent: 'space-between'
  }
});

function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const classes = useStyles();
  const open = Boolean(anchorEl)

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position='static'>
      <Toolbar>
        <Grid container className={classes.toolbar}>
          <Grid item >
            <Button component={Link} to='/' color='inherit'>
              House of Optical
            </Button>
          </Grid>

          <Grid item>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
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
              open={open}
              onClose={handleClose}
            >
              <MenuItem component={Link} to='/login'>Login</MenuItem>
              <MenuItem component={Link} to='/signup'>Sign up</MenuItem>
            </Menu>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar