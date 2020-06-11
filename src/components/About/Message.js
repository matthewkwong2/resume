import { Box, Typography, makeStyles } from '@material-ui/core';

import React from 'react';
import about from 'constants/about';
import data from 'constants/data';

const useStyles = makeStyles({
  lastName: {
    textTransform: 'uppercase'
  },
  occupations: {
    fontWeight: 'normal'
  },
  intro: {
    maxWidth: 850
  }
});

const Message = () => {
  const classes = useStyles();

  return (
    <Box display='flex' flexDirection='column' alignItems='center' mt={3} pt={3}>
      <Typography
        align='center'
        color='textPrimary'
        variant='h5'
        gutterBottom
      >
        {about.helloPrefix}
        <span className={classes.lastName}>{data.lastName + ', '}</span>
        {data.firstName + ' '}
        {data.middleName}
        {about.helloSuffix}
      </Typography>
      <Typography
        align='center'
        className={classes.occupations}
        color='textSecondary'
        variant='h6'
        gutterBottom
      >
        {data.occupations.join('　•　')}
      </Typography>
      <Typography
        align='center'
        className={classes.intro}
        color='textSecondary'
        variant='body1'
      >
        {data.about.intro}
      </Typography>
    </Box>
  );
};

export default Message;