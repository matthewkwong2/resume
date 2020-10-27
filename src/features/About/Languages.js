import { Box, useTheme } from '@material-ui/core';
import { Suspense, lazy } from 'react';

import data from 'constants/data';
import { useInView } from 'react-intersection-observer';

const RadarChart = lazy(() => import('components/RadarChart'));

const Languages = () => {
  const theme = useTheme();
  const keys = ['rating'];
  const margin = {
    top: theme.spacing(3),
    right: theme.spacing(6.25),
    bottom: 0,
    left: theme.spacing(6.25)
  };
  const nivoTheme = {
    fontFamily: theme.typography.fontFamily
  };

  const { ref, inView } = useInView({
    rootMargin: '50%',
    triggerOnce: true,
  });

  const lazyRadarChart = (
    <Suspense fallback={null}>
      <RadarChart
        data={data.about.languages}
        indexBy='name'
        keys={keys}
        colors={theme.palette.primary.main}
        isInteractive={false}
        enableDots={false}
        borderWidth={0}
        fillOpacity={1}
        margin={margin}
        theme={nivoTheme}
      />
    </Suspense>
  );

  return (
    <Box ref={ref} height={300} mt={6}>
      {inView ? lazyRadarChart : null}
    </Box>
  );
};

export default Languages;