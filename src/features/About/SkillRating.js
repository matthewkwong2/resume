import { Box, LinearProgress, Typography, makeStyles } from '@material-ui/core';

import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    '&:not(:first-child):not(:last-child)': {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6)
    }
  },
  skillName: {
    flexGrow: 1,
    fontWeight: 'bold'
  },
  progressBar2: {
    backgroundColor: theme.palette.grey[100]
  }
}));

const SkillRating = ({ name, rating }) => {
  const classes = useStyles();
  const linearProgressClasses = {
    colorPrimary: classes.progressBar2
  };

  return (
    <Box className={classes.root}>
      <Box display='flex'>
        <Typography color='textPrimary' variant='body1' className={classes.skillName}>
          {name}
        </Typography>
        <Typography color='textSecondary' variant='body1'>
          {Math.round(rating) + '%'}
        </Typography>
      </Box>
      <LinearProgress
        classes={linearProgressClasses}
        variant='determinate'
        color='primary'
        value={rating}
      />
    </Box>
  );
};

SkillRating.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

export default SkillRating;
