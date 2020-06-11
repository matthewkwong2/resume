import { Box, SvgIcon, Typography, makeStyles, useTheme } from '@material-ui/core';

import PropTypes from 'prop-types';
import React from 'react';
import { ReactComponent as User } from 'assets/icon/mbri-user.svg';

const useStyles = makeStyles(theme => ({
  accountIcon: {
    fontSize: 60
  },
  name: {
    marginTop: theme.spacing(3)
  },
  comment: {
    marginTop: theme.spacing(3),
    fontSize: 18,
    maxWidth: 580
  }
}));

const Endorsement = ({ name, company, comment }) => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <Box
      py={3}
      display='flex'
      flexDirection='column'
      alignItems='center'
    >
      <SvgIcon
        className={classes.accountIcon}
        htmlColor={theme.palette.text.primary}
      >
        <User />
      </SvgIcon>
      <Typography className={classes.name} color='textPrimary' variant='h6'>
        {name}
      </Typography>
      <Typography color='textPrimary' variant='body1'>
        {company}
      </Typography>
      <Typography
        className={classes.comment}
        align='center'
        color='textPrimary'
        variant='body1'
      >
        {`"${comment}"`}
      </Typography>
    </Box>
  );
};

Endorsement.propTypes = {
  name: PropTypes.string,
  company: PropTypes.string,
  comment: PropTypes.string
};

export default Endorsement;