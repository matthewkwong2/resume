import { ListItem, ListItemText, Typography, makeStyles } from '@material-ui/core';

import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles({
  navListItemTextPrimary: {
    textTransform: 'capitalize',
    fontWeight: 500
  }
});

const NavListItem = ({ label, id, active }) => {
  const classes = useStyles();
  const color = active ? 'textPrimary' : 'textSecondary';
  const section = document.getElementById(id);

  const primaryTypographyProps = {
    color,
    className: classes.navListItemTextPrimary
  };

  const handleClick = () => {
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ListItem button className={classes.navListItem} onClick={handleClick}>
      <ListItemText
        primary={label}
        primaryTypographyProps={primaryTypographyProps}
      />
    </ListItem >
  );
};

NavListItem.muiName = ListItem.muiName;

NavListItem.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired
};

export default NavListItem;