import { Button, Typography, makeStyles } from '@material-ui/core';

import React from 'react';
import data from 'constants/data';
import nav from 'constants/nav';

const useStyles = makeStyles(theme => ({
  root: {
    marginRight: 'auto'
  },
  typography: {
    fontFamily: 'Azonix Regular',
  }
}));

const Logo = () => {
  const classes = useStyles();

  return (
    <Button className={classes.root} href={nav.home.href}>
      <Typography className={classes.typography} variant='h5'      >
        {data.firstName}
      </Typography>
    </Button>
  );
};

export default Logo;