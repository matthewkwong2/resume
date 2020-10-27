import { Button, Typography, makeStyles } from '@material-ui/core';

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
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
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