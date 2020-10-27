import { ButtonBase, makeStyles } from '@material-ui/core';

import PropTypes from 'prop-types';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  root: {
    width: 12,
    height: 6,
    backgroundColor: theme.palette.text.primary,
    opacity: 0.5,
    borderRadius: 6,
    marginLeft: theme.spacing(.5),
    marginRight: theme.spacing(.5),
    transition: theme.transitions.create('all', {
      duration: theme.transitions.duration.standard,
    }),
    '&:hover': {
      opacity: .87
    }
  },
  active: {
    width: 20,
    opacity: .87
  }
}));

const PaginationItem = ({ active = false, onClick }) => {
  const classes = useStyles();
  const className = clsx(classes.root, { [classes.active]: active });
  return (
    <ButtonBase
      className={className}
      onClick={onClick}
      component='div'
    />
  );
};

PaginationItem.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func
};

export default PaginationItem;