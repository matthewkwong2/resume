import {
  Card,
  CardContent,
  Typography,
  fade,
  makeStyles
} from '@material-ui/core';

import CountUp from 'react-countup';
import PropTypes from 'prop-types';
import React from 'react';
import { isPercentage } from 'api/funFact';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'transparent',
    borderColor: fade(theme.palette.common.white, .23 * 2),
    height: '100%'
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
  icon: {
    fontSize: 40,
    marginBottom: theme.spacing(2)
  },
  value: {
    marginBottom: theme.spacing(.5)
  }
}));

const FactCard = ({ Icon, title, value = 0, startCountDown = false }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant='outlined'>
      <CardContent className={classes.cardContent}>
        <Icon className={classes.icon} />
        <Typography color='textPrimary' variant='h3' className={classes.value}>
          {
            startCountDown
              ? (
                <CountUp
                  end={parseInt(value, 10)}
                  duration={3}
                  suffix={isPercentage(value) ? '%' : null}
                />
              )
              : isPercentage(value) ? '0%' : 0
          }
        </Typography>
        <Typography color='textSecondary' variant='body2'>
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

FactCard.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
  startCountDown: PropTypes.bool
};

export default FactCard;