import { Box, Container, Toolbar } from '@material-ui/core';

import DownloadResumeButton from './DownloadResumeButton';
import SocialMedia from 'components/SocialMedia';
import ThemeProvider from 'components/ThemeProvider';
import Title from './Title';
import nav from 'constants/nav';
import useSx from './useHomeSx';

const Home = () => {
  const sx = useSx();

  return (
    <Box component='section' sx={sx.root} id={nav.home.id}>
      <Toolbar />
      <ThemeProvider mode='dark'>
        <Container sx={sx.container}>
          <Title />
          <SocialMedia sx={sx.socialMedia} />
          <DownloadResumeButton sx={sx.downloadResumeButton} />
        </Container>
      </ThemeProvider>
    </Box>
  );
};

export default Home;