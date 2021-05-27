import React from 'react';

import {AppBar} from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import './footer.scss';

export default function Header(){

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
