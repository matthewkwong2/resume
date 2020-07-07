import { Box, Container, ThemeProvider, Toolbar, makeStyles } from '@material-ui/core';

import DownloadResumeButton from './DownloadResumeButton';
import React from 'react';
import SocialMedia from 'components/SocialMedia';
import Title from './Title';
import { darkTheme } from 'theme';
import dataCenter from 'assets/img/data_center.jpg';
import nav from 'constants/nav';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    height: '100vh',
    background: `
    linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)),
    url(${dataCenter})
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
});


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