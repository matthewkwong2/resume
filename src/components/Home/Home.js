import {
  Box,
  Container,
  ThemeProvider,
  Toolbar,
  makeStyles
} from '@material-ui/core';
import { createFullScreenBackground, darkTheme } from 'theme';

import DownloadResumeButton from './DownloadResumeButton';
import React from 'react';
import SocialMedia from 'components/SocialMedia';
import Title from './Title';
import bg from 'assets/img/bg_home.jpg';
import bgLg from 'assets/img/bg_home_lg.jpg';
import bgMd from 'assets/img/bg_home_md.jpg';
import bgPlaceholder from 'assets/img/bg_home_placeholder.jpg';
import bgSm from 'assets/img/bg_home_sm.jpg';
import nav from 'constants/nav';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    height: '100vh',
    ...createFullScreenBackground(theme, bg, bgLg, bgMd, bgSm, bgPlaceholder)
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