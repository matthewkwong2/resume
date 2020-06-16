import { ListItem, Typography, makeStyles } from '@material-ui/core';

import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles({
  navListItem: {
    textTransform: 'uppercase'
  }
});

const NavListItem = ({ label, id, active }) => {
  const classes = useStyles();
  const color = active ? 'textPrimary' : 'textSecondary';
  const section = document.getElementById(id);

  const handleClick = () => {
    section.scrollIntoView();
  };

  return (
    <ListItem button className={classes.navListItem} onClick={handleClick}>
      <Typography variant='inherit' color={color}>
        {label}
      </Typography>
    </ListItem >
  );
};

NavListItem.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired
};

export default NavListItem;