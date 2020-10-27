import { Snackbar, makeStyles, useScrollTrigger } from '@material-ui/core';
import { isSwContentCached, isSwNewContentAvail } from 'selectors';
import { useEffect, useState } from 'react';

import ReloadButton from './ReloadButton';
import app from 'constants/app';
import clsx from 'clsx';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {
    transition: theme.transitions.create('bottom', {
      duration: theme.transitions.duration.standard,
    })
  },
  hasFab: {
    [theme.breakpoints.down('xs')]: {
      bottom: theme.spacing(9)
    }
  }
}));

const SwSnackbar = () => {
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });
  const swContentCached = useSelector(isSwContentCached);
  const swNewContentAvail = useSelector(isSwNewContentAvail);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(swContentCached || swNewContentAvail);
  }, [swContentCached, swNewContentAvail]);

  const handleClose = (_, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const autoHideDuration = swContentCached ? 6000 : null;
  const action =
    swNewContentAvail
      ? <ReloadButton onClose={handleClose} />
      : null;
  const className = clsx(classes.root, {
    [classes.hasFab]: trigger
  });
  const anchorOrigin = {
    vertical: 'bottom',
    horizontal: 'left',
  };
  const message = swContentCached
    ? app.swContentCachedMessage
    : swNewContentAvail
      ? app.swNewContentAvailMessage
      : null;

  return (
    <Snackbar
      className={className}
      anchorOrigin={anchorOrigin}
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={handleClose}
      message={message}
      action={action}
    />
  );
};

export default SwSnackbar;