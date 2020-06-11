import {
  Fab,
  SvgIcon,
  Zoom,
  makeStyles,
  useScrollTrigger
} from '@material-ui/core';

import { ReactComponent as ArrowUp } from 'assets/icon/mbri-arrow-up.svg';
import React from 'react';
import nav from 'constants/nav'

const useStyles = makeStyles(theme => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  icon: {
    fontSize: 12
  }
}));

const ScrollToTopFab = () => {
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });
  const homeSection = document.getElementById(nav.home.id);

  const handleClick = () => {
    homeSection.scrollIntoView();
  };

  return (
    <Zoom in={trigger}>
      <Fab
        className={classes.fab}
        size='small'
        color='primary'
        onClick={handleClick}
        aria-label='scroll back to top'
      >
        <SvgIcon className={classes.icon}>
          <ArrowUp />
        </SvgIcon>
      </Fab>
    </Zoom>
  );
};

export default ScrollToTopFab;
