import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  SvgIcon,
  Typography,
  makeStyles
} from '@material-ui/core';
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator
} from '@material-ui/lab';

import { ReactComponent as Download } from 'assets/icon/mbri-download.svg';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles({
  card: {
    minWidth: 265
  },
  period: {
    fontSize: 14,
  },
  subheader: {
    marginBottom: 12,
  },
  download: {
    marginLeft: 'auto'
  },
});

const ExpTimelineItem = ({
  period,
  title,
  subheader,
  description,
  file = '#'
}) => {
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
            <Typography variant='h6'>
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
          <CardActions disableSpacing>
            <IconButton
              className={classes.download}
              aria-label="show more"
              href={file}
              target='_blank'
              rel='noopener noreferrer'
            >
              <SvgIcon>
                <Download />
              </SvgIcon>
            </IconButton>
          </CardActions>
        </Card>
      </TimelineContent>
    </TimelineItem>
  );
};

ExpTimelineItem.propTypes = {
  period: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subheader: PropTypes.string,
  description: PropTypes.string,
  file: PropTypes.string
};

export default ExpTimelineItem;