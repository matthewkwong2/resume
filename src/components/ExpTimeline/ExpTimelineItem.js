import {
  Card,
  CardActions,
  CardContent,
  IconButton,
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

import { Download } from 'components/icons';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  card: {
    backgroundColor: 'transparent'
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
            >
              {subheader}
            </Typography>
            <Typography color='textPrimary' variant='body2'>
              {description}
            </Typography>
          </CardContent>
          {
            file
              ? (
                <CardActions disableSpacing>
                  <IconButton
                    className={classes.download}
                    aria-label='show more'
                    href={file}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Download />
                  </IconButton>
                </CardActions>
              )
              : null
          }
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