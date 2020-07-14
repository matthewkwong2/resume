import { Backdrop, makeStyles } from '@material-ui/core';

import React from 'react';
import useLoadingTrigger from 'hooks/useLoadingTrigger';

const useStyles = makeStyles(theme => ({
  root: {
    zIndex: theme.zIndex.drawer + 1
  },
}));

const SwSnackbar = () => {
  const classes = useStyles();
  const trigger = useLoadingTrigger();

  return (
    <Backdrop
      open={trigger}
      className={classes.root}
    />
  );
};

export default SwSnackbar;