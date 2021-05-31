import React, {useState} from 'react';

// import clsx from 'clsx';
import {AppBar} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import './header.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  }
}));

export default function Header(){
  const classes = useStyles();
  const [sidenav, setSidenav] = useState(false);

  const SideNav = () => (
    <div id="crx" className={classes.List} role="presentation" onClick={()=>{
      // console.log("Nice");
      setSidenav(false)
      }}>
      <List>
        {
          ['Home', 'About us'].map((text, index) => (
            <ListItem button={true} key={text} onClick={()=>{
              window.location = index%2==0 ? "/" : "/about";
            }}>
              <ListItemIcon>{
                index % 2 === 0
                  ? <HomeIcon/>
                  : <GroupIcon/>
              }</ListItemIcon>
              <ListItemText primary={text}/>
            </ListItem>))
        }
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Reference Manager
          </Typography>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={()=>{
              setSidenav(!sidenav)
            }}
            >
            <MenuIcon/>
          </IconButton>
          <Drawer anchor="right" open={sidenav} onClick={()=>{
            // console.log("Nice try")
            setSidenav(false)
          }}>
            <SideNav/>
          </Drawer>
        </Toolbar>
      </AppBar>
    </div>
  );
};
