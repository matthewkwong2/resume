import { Box, Typography, makeStyles } from '@material-ui/core';

import about from 'constants/about';
import data from 'constants/data';

const useStyles = makeStyles({
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
        component='h1'
        gutterBottom
      >
        {about.helloPrefix}
        {data.firstName + ' ' + data.lastName}
        {about.helloSuffix}
      </Typography>
      <Typography
        align='center'
        className={classes.occupations}
        color='textSecondary'
        variant='h6'
        component='h2'
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