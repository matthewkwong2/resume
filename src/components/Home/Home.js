import {
  Box,
  Container,
  ThemeProvider,
  makeStyles,
  useMediaQuery,
  useTheme
} from '@material-ui/core';
import React, { useEffect } from 'react';

import DownloadCVButton from './DownloadCVButton';
import SocialMedia from 'components/SocialMedia';
import Title from './Title';
import { darkTheme } from 'theme';
import dataCenter from 'assets/img/data_center.jpg';
import nav from 'constants/nav';
import { updateCurrentSection } from 'actions'
import { useDispatch } from 'react-redux';
import { useInView } from 'react-intersection-observer';

const useStyles = makeStyles({
  root: {
    height: '100vh',
    background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${dataCenter})`,
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  }
});


const Home = () => {
  const theme = useTheme();
  const xsDown = useMediaQuery(theme.breakpoints.down('xs'));
  const [ref, inView] = useInView({ threshold: xsDown ? 0.1 : 0.5 });
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    if (inView) {
      dispatch(updateCurrentSection(nav.home.id));
    }
  }, [dispatch, inView]);

  return (
    <section id={nav.home.id} className={classes.root}>
      <ThemeProvider theme={darkTheme}>
        <Container ref={ref} className={classes.container}>
          <Title />
          <Box pt={3}>
            <SocialMedia />
          </Box>
          <DownloadCVButton />
        </Container>
      </ThemeProvider>
    </section>
  );
};

export default Home;