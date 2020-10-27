import { Box, IconButton, makeStyles } from '@material-ui/core';
import { Facebook, Github, Linkedin } from 'mdi-material-ui';

import data from 'constants/data';

const useStyles = makeStyles(theme => ({
  iconButton: {
    '&:not(:first-child):not(:last-child)': {
      marginLeft: theme.spacing(.5),
      marginRight: theme.spacing(.5)
    }
  }
}));


const SocialMedia = () => {
  const classes = useStyles();

  return (
    <Box display='flex'>
      <IconButton
        className={classes.iconButton}
        href={data.socialMedia.facebookHref}
        aria-label='navigate to Facebook profile'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Facebook />
      </IconButton>
      <IconButton
        className={classes.iconButton}
        href={data.socialMedia.linkedinHref}
        aria-label='navigate to Linkedin profile'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Linkedin />
      </IconButton>
      <IconButton
        className={classes.iconButton}
        href={data.socialMedia.gitHubHref}
        aria-label='navigate to Github profile'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Github />
      </IconButton>
    </Box>
  );
};

export default SocialMedia;