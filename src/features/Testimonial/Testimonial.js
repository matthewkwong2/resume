import { Box, Container } from '@material-ui/core';
import { Suspense, lazy } from 'react';

import EndorsementFallback from './EndorsementFallback';
import { HexagonSlice5 } from 'mdi-material-ui';
import SectionHeader from 'components/SectionHeader';
import ThemeProvider from 'components/ThemeProvider';
import constants from 'constants/app';
import nav from 'constants/nav';
import useSx from './useTestimonialSx';

const Carousel = lazy(() => import('./Carousel'));

const Testimonial = () => {
  const sx = useSx();

  return (
    <Box component='section' sx={sx.root} id={nav.testimonial.id}>
      <ThemeProvider mode='dark'>
        <Container>
          <SectionHeader
            heading={constants.whatPeopleSay}
            Icon={HexagonSlice5}
          />
          <Suspense fallback={<EndorsementFallback />}>
            <Carousel />
          </Suspense>
        </Container>
      </ThemeProvider>
    </Box>
  );
};

export default Testimonial;