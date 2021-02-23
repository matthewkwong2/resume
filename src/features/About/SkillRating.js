import { Box, LinearProgress, Typography, makeStyles } from '@material-ui/core';

import PropTypes from 'prop-types';
import useSx from './useSkillRatingSx';

// TODO convert to sx prop

const useStyles = makeStyles(theme => ({
  rating: {
    backgroundColor: '#eceff4'
  }
}));

const SkillRating = ({ name, rating }) => {
  const classes = useStyles();
  const sx = useSx();

  return (
    <Box sx={sx.root}>
      <Box sx={sx.ratingContainer}>
        <Typography sx={sx.skillName}>
          {name}
        </Typography>
        <Typography sx={sx.ratingText}>
          {Math.round(rating) + '%'}
        </Typography>
      </Box>
      <LinearProgress
        className={classes.rating}
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
