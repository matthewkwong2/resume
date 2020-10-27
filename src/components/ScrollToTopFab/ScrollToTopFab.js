import { Fab, Zoom, makeStyles, useScrollTrigger } from '@material-ui/core';

import { ArrowUp } from 'components/icons';

const useStyles = makeStyles(theme => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  icon: {
    fontSize: 14
  }
}));

const ScrollToTopFab = () => {
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
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
        <ArrowUp className={classes.icon} />
      </Fab>
    </Zoom>
  );
};

export default ScrollToTopFab;
