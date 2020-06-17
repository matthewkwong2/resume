import { ButtonBase, makeStyles } from '@material-ui/core';

import PropTypes from 'prop-types';
import React from 'react';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  root: {
    width: 12,
    height: 6,
    backgroundColor: theme.palette.text.primary,
    opacity: 0.5,
    borderRadius: 6,
    marginLeft: theme.spacing(0.5),
    marginRight: theme.spacing(0.5),
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

const PaginationItem = ({ active = false, key, onClick }) => {
  const classes = useStyles();
  const ariaLabel = 'show tab' + key;

  return (
    <ButtonBase
      aria-label={ariaLabel}
      className={clsx(classes.root, { [classes.active]: active })}
      onClick={onClick}
    />
  );
};

PaginationItem.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func
};

export default PaginationItem;