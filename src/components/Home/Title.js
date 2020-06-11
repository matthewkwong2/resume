import { Box, Typography, makeStyles, useMediaQuery, useTheme } from '@material-ui/core';

import React from 'react';
import Typewriter from 'typewriter-effect';
import data from 'constants/data';
import home from 'constants/home';

const useStyles = makeStyles(theme => ({
  importantText: {
    [theme.breakpoints.up('sm')]: {
      fontWeight: 400,
    },
    fontWeight: 500
  }
}));

const Title = () => {
  const classes = useStyles();
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'));

  const typewriterOptions = {
    strings: [
      `${data.firstName} ${data.lastName}.`,
      ...data.occupations.map(occupation => `A ${occupation}.`)
    ],
    loop: true,
    autoStart: true
  };

  return (
    <Box display='flex' flexDirection='column' alignItems='center'>
      <Typography
        color='textPrimary'
        variant={smUp ? 'h5' : 'h6'}
        gutterBottom
      >
        {home.greetings}
      </Typography>
      <Typography
        align='center'
        color='textPrimary'
        variant={smUp ? 'h2' : 'h3'}
      >
        {home.titlePrefix}
        <span className={classes.importantText}>
          <Typewriter options={typewriterOptions} />
        </span>
      </Typography>
    </Box>
  );
};

export default Title;