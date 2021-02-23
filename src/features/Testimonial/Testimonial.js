import { Box, Container } from '@material-ui/core';
import { Suspense, lazy } from 'react';

import { HexagonSlice5 } from 'mdi-material-ui';
import SectionHeader from 'components/SectionHeader';
import ThemeProvider from 'components/ThemeProvider';
import constants from 'constants/app';
import nav from 'constants/nav';
import { useInView } from 'react-intersection-observer';
import useSx from './useTestimonialSx';

const Carousel = lazy(() => import('./Carousel'));

const Testimonial = () => {
  const sx = useSx();

  const { ref, inView } = useInView({
    rootMargin: '50%',
    triggerOnce: true,
  });

  const lazyCarousel = (
    <Suspense fallback={null}>
      <Carousel />
    </Suspense>
  );

  return (
    <Box component='section' sx={sx.root} id={nav.testimonial.id}>
      <ThemeProvider mode='dark'>
        <Container>
          <SectionHeader
            heading={constants.whatPeopleSay}
            Icon={HexagonSlice5}
          />
          <Box ref={ref} sx={sx.carouselContainer}>
            {inView ? lazyCarousel : null}
          </Box>
        </Container>
      </ThemeProvider>
    </Box>
  );
};

export default Testimonial;