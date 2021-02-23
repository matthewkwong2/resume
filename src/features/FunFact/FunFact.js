import { Box, Container, Grid } from '@material-ui/core';
import { Gift, Globe, Heart, HotCup } from 'components/icons';

import FactCard from './FactCard';
import ThemeProvider from 'components/ThemeProvider';
import constants from 'constants/app';
import data from 'constants/data';
import { useInView } from 'react-intersection-observer';
import useSx from './useFunFactSx';

const FunFact = () => {
  const sx = useSx();
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <Box component='section' ref={ref} sx={sx.root}>
      <ThemeProvider mode='dark'>
        <Container>
          <Grid container spacing={4}>
            <Grid item md={3} sm={6} xs={12}>
              <FactCard
                Icon={Globe}
                title={constants.completedCourses}
                value={data.funFact.completedCourses}
                startCountUp={inView}
              />
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
              <FactCard
                Icon={Gift}
                title={constants.completedProjects}
                value={data.funFact.completedProjects}
                startCountUp={inView}
              />
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
              <FactCard
                Icon={Heart}
                title={constants.happySupervisors}
                value={data.funFact.happySupervisors}
                startCountUp={inView}
              />
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
              <FactCard
                Icon={HotCup}
                title={constants.commitment}
                value={data.funFact.commitment}
                startCountUp={inView}
              />
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </Box>
  );
};

export default FunFact;