import {
  Card,
  CardContent,
  Typography,
  fade,
  makeStyles
} from '@material-ui/core';
import { useEffect, useRef } from 'react';

import { CountUp } from 'countup.js';
import PropTypes from 'prop-types';
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

const FactCard = ({ Icon, title, value = 0, startCountUp = false }) => {
  const classes = useStyles();
  const countUpRef = useRef(null);

  useEffect(() => {
    if (startCountUp) {
      const countUp = new CountUp(
        countUpRef.current,
        parseInt(value, 10),
        {
          duration: 3,
          suffix: isPercentage(value) ? '%' : ''
        }
      );

      countUp.start();
    }
  }, [value, startCountUp]);

  return (
    <Card className={classes.root} variant='outlined'>
      <CardContent className={classes.cardContent}>
        <Icon className={classes.icon} />
        <Typography
          ref={countUpRef}
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
  startCountUp: PropTypes.bool
};

export default FactCard;