import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';

import {AppBar} from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import clsx from 'clsx';

import './footer.scss';

const useStyles = makeStyles((theme) => ({

}));

export default function Header(){
  const classes = useStyles();

  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="md">
        <Toolbar>
          <Typography variant="body1" color="inherit">
            &copy; reference-editor
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
