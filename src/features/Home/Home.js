import {
  Box,
  Container,
  ThemeProvider,
  Toolbar,
  makeStyles
} from '@material-ui/core';
import { createBackground, darkTheme } from 'theme';

import DownloadResumeButton from './DownloadResumeButton';
import SocialMedia from 'components/SocialMedia';
import Title from './Title';
import bgFallback from 'assets/img/bg_home.jpg';
import bgMdFallback from 'assets/img/bg_home_md.jpg';
import bgMdWebp from 'assets/img/bg_home_md.webp';
import bgPlaceholder from 'assets/img/bg_home_placeholder.jpg';
import bgSmFallback from 'assets/img/bg_home_sm.jpg';
import bgSmWebp from 'assets/img/bg_home_sm.webp';
import bgWebp from 'assets/img/bg_home.webp';
import bgXsFallback from 'assets/img/bg_home_xs.jpg';
import bgXsWebp from 'assets/img/bg_home_xs.webp';
import nav from 'constants/nav';

const bgsWebp = {
  bg: bgWebp,
  bgMd: bgMdWebp,
  bgSm: bgSmWebp,
  bgXs: bgXsWebp
};

const bgsFallback = {
  bg: bgFallback,
  bgMd: bgMdFallback,
  bgSm: bgSmFallback,
  bgXs: bgXsFallback
};

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    height: '100vh',
    ...createBackground(theme, bgsWebp, bgsFallback, bgPlaceholder)
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