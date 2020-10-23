import { Button, makeStyles } from '@material-ui/core';

import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    '&:not(:first-child):not(:last-child)': {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1)
    }
  },
  active: {
    height: 3,
    width: theme.spacing(2),
    backgroundColor: theme.palette.text.primary,
    position: 'absolute',
    bottom: 0,
    left: `calc(50% - ${theme.spacing(1)}px)`
  }
}));

const NavButton = ({ label, id, active }) => {
  const classes = useStyles();
  const section = document.getElementById(id);

  const handleClick = () => {
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Button className={classes.root} onClick={handleClick}>
      {label}
      {
        active
          ? <span className={classes.active} />
          : null
      }
    </Button>
  );
};

NavButton.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired
};

export default NavButton;