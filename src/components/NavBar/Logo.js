import { Button, Typography, makeStyles } from '@material-ui/core';

import React from 'react';
import data from 'constants/data';

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

  const handleClick = () => {
    window.scroll(0, 0);
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