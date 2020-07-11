import { Backdrop, makeStyles } from '@material-ui/core';

import React from 'react';
import useBeforeUnloadTrigger from 'hooks/useBeforeUnloadTrigger';

const useStyles = makeStyles(theme => ({
  root: {
    zIndex: theme.zIndex.drawer + 1
  },
}));

const SwSnackbar = () => {
  const classes = useStyles();
  const trigger = useBeforeUnloadTrigger();

  return (
    <Backdrop
      open={trigger}
      className={classes.root}
    />
  );
};

export default SwSnackbar;