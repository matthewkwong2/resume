import {
  Box,
  SvgIcon,
  Typography,
  makeStyles,
  useTheme
} from '@material-ui/core';

import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    '&:not(:first-child):not(:last-child)': {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3)
    }
  },
  title: {
    fontWeight: 500,
    marginTop: theme.spacing(2)
  }
}));

const PersonalInfoItem = ({ Icon, title, value }) => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <Box display='flex' flexDirection='column' alignItems='center' className={classes.root}>
      {
        Icon.muiName === 'SvgIcon'
          ? <Icon fontSize='large' color='action' />
          : (
            <SvgIcon fontSize='large' color='action'>
              <Icon />
            </SvgIcon>
          )
      }
      <Typography className={classes.title} color='textPrimary' variant='body1' gutterBottom>
        {title}
      </Typography>
      <Typography align='center' color='textSecondary' variant='body1' gutterBottom>
        {value}
      </Typography>
    </Box>
  );
};

PersonalInfoItem.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};


export default PersonalInfoItem;