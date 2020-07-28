import { Button, Typography, makeStyles } from '@material-ui/core';

import React from 'react';
import data from 'constants/data';
import nav from 'constants/nav';

const useStyles = makeStyles({
  root: {
    marginRight: 'auto'
  },
  typography: {
    fontFamily: 'Azonix'
  }
});

const Logo = () => {
  const classes = useStyles();
  const homeSection = document.getElementById(nav.home);

  const handleClick = () => {
    homeSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Button className={classes.root} onClick={handleClick}>
      <Typography className={classes.typography} variant='h5'>
        {data.firstName}
      </Typography>
    </Button>
  );
};

export default Logo;