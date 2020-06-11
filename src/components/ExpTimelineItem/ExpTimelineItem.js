import { Card, CardContent, Typography, makeStyles } from '@material-ui/core';

import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 420
  },
  period: {
    fontSize: 14,
  },
  subheader: {
    marginBottom: 12,
  }
});

const ExpTimelineItem = ({ period, title, subheader, description }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant='outlined'>
      <CardContent>
        <Typography className={classes.period} color='textSecondary' gutterBottom>
          {period}
        </Typography>
        <Typography variant='h5'>
          {title}
        </Typography>
        <Typography
          className={classes.subheader}
          color='textSecondary'
          variant='body1'
        >
          {subheader}
        </Typography>
        <Typography color='textPrimary' variant='body2'>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

ExpTimelineItem.propTypes = {
  period: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subheader: PropTypes.string.isRequired,
  description: PropTypes.string
};

export default ExpTimelineItem;