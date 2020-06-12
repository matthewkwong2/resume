import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  List,
  ListItem,
  ListItemText,
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
import expTimeline from 'constants/expTimeline';

const useStyles = makeStyles({
  card: {
    minWidth: 265
  },
  period: {
    fontSize: 14,
  },
  download: {
    marginLeft: 'auto'
  },
  prefix: {
    fontWeight: 500
  }
});

const ExpTimelineItem = ({
  period,
  title,
  subheader,
  intro,
  keyPoints,
  keyAchievement,
  file
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
            <Typography variant='h6' noWrap>
              {title}
            </Typography>
            <Typography color='textSecondary' variant='body1' noWrap>
              {subheader}
            </Typography>
            <Typography color='textPrimary' variant='body2'>
              {intro}
            </Typography>
            <List dense>
              {keyPoints.map(keyPoint => (
                <ListItem>
                  <ListItemText primary={keyPoint} />
                </ListItem>
              ))}
            </List>
            <Typography color='textPrimary' variant='body2'>
              <span className={classes.prefix}>
                {expTimeline.keyAchievementPrefix}
              </span>
              {keyAchievement}
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
  intro: PropTypes.string,
  keyPoints: PropTypes.arrayOf(PropTypes.string),
  keyAchievement: PropTypes.string,
  file: PropTypes.string
};

export default ExpTimelineItem;