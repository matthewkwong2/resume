import {
  Box,
  Typography,
  makeStyles,
  useMediaQuery,
  useTheme
} from '@material-ui/core';
import { useEffect, useRef } from 'react';

import Typewriter from 'typewriter-effect/dist/core';
import data from 'constants/data';
import home from 'constants/home';

const useStyles = makeStyles(theme => ({
  title: {
    '@media (max-width: 520px)': {
      height: `${theme.typography.h2.lineHeight * 2}em`
    },
    '@media (max-width: 300px)': {
      height: `${theme.typography.h2.lineHeight * 3}em`
    }
  },
  importantText: {
    fontWeight: 400
  }
}));

const Title = () => {
  const classes = useStyles();
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const typewriterRef = useRef(null);

  useEffect(() => {
    new Typewriter(typewriterRef.current, {
      strings: [
        `${data.firstName} ${data.lastName}.`,
        ...data.occupations.map(occupation => `A ${occupation}.`)
      ],
      loop: true,
      autoStart: true
    });
  }, []);

  return (
    <Box display='flex' flexDirection='column' alignItems='center'>
      <Typography
        color='textPrimary'
        variant={smDown ? 'h5' : 'h6'}
        gutterBottom
      >
        {home.greetings}
      </Typography>
      <Typography
        align='center'
        color='textPrimary'
        variant='h2'
        className={classes.title}
      >
        {home.titlePrefix}
        <span ref={typewriterRef} className={classes.importantText} />
      </Typography>
    </Box>
  );
};

export default Title;