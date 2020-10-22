import {
  Card,
  CardContent,
  Typography,
  fade,
  makeStyles
} from '@material-ui/core';
import React, { useEffect, useRef } from 'react';

import { CountUp } from 'countup.js';
import PropTypes from 'prop-types';
import { isPercentage } from 'api/funFact';

// import CountUp from 'react-countup';




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
  const textRef = useRef(null);
  const countUp = new CountUp(
    textRef.current,
    parseInt(value, 10),
    {
      duration: 3,
      suffix: isPercentage(value) ? '%' : ''
    }
  );

  useEffect(() => {
    if (startCountDown) {
      countUp.start();
    }
  }, [countUp, startCountDown]);

  return (
    <Card className={classes.root} variant='outlined'>
      <CardContent className={classes.cardContent}>
        <Icon className={classes.icon} />
        <Typography
          ref={textRef}
          color='textPrimary'
          variant='h3'
          className={classes.value}
        />
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