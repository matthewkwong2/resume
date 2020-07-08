import {
  Box,
  Container,
  ThemeProvider,
  Toolbar,
  fade,
  makeStyles
} from '@material-ui/core';

import DownloadResumeButton from './DownloadResumeButton';
import React from 'react';
import SocialMedia from 'components/SocialMedia';
import Title from './Title';
import bg from 'assets/img/bg_home.jpg';
import bgLg from 'assets/img/bg_home_lg.jpg';
import bgMd from 'assets/img/bg_home_md.jpg';
import bgSm from 'assets/img/bg_home_sm.jpg';
import { darkTheme } from 'theme';
import nav from 'constants/nav';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    height: '100vh',
    [theme.breakpoints.down('xs')]: {
      background: `
        linear-gradient(
          ${fade(theme.palette.common.black, .7)}, 
          ${fade(theme.palette.common.black, .7)}
        ),
        url(${bgSm})      
      `,
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundColor: darkTheme.palette.background.default,
    },
    [theme.breakpoints.up('sm')]: {
      background: `
        linear-gradient(
          ${fade(theme.palette.common.black, .7)}, 
          ${fade(theme.palette.common.black, .7)}
        ),
        url(${bgMd})      
      `,
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundColor: darkTheme.palette.background.default,
    },
    [theme.breakpoints.up('md')]: {
      background: `
        linear-gradient(
          ${fade(theme.palette.common.black, .7)}, 
          ${fade(theme.palette.common.black, .7)}
        ),
        url(${bgLg})      
      `,
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundColor: darkTheme.palette.background.default,
    },
    background: `
      linear-gradient(
        ${fade(theme.palette.common.black, .7)}, 
        ${fade(theme.palette.common.black, .7)}
      ),
      url(${bg})
    `,
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: darkTheme.palette.background.default
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  }
}));


const Home = () => {
  const classes = useStyles();

  return (
    <section id={nav.home} className={classes.root}>
      <Toolbar />
      <ThemeProvider theme={darkTheme}>
        <Container className={classes.container}>
          <Title />
          <Box pt={3}>
            <SocialMedia />
          </Box>
          <DownloadResumeButton />
        </Container>
      </ThemeProvider>
    </section>
  );
};

export default Home;