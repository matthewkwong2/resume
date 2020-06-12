import { Card, CardContent, Typography, makeStyles } from '@material-ui/core';
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator
} from '@material-ui/lab';

import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles({
  card: {
    minWidth: 275
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
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot color='primary' />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Card className={classes.card} variant='outlined'>
          <CardContent>
            <Typography
              className={classes.period}
              color='textSecondary'
              gutterBottom
              noWrap
            >
              {period}
            </Typography>
            <Typography variant='h6' noWrap>
              {title}
            </Typography>
            <Typography
              className={classes.subheader}
              color='textSecondary'
              variant='body1'
              noWrap
            >
              {subheader}
            </Typography>
            <Typography color='textPrimary' variant='body2'>
              {description}
            </Typography>
          </CardContent>
        </Card>
      </TimelineContent>
    </TimelineItem>
  );
};

ExpTimelineItem.propTypes = {
  period: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subheader: PropTypes.string,
  description: PropTypes.string
};

export default ExpTimelineItem;