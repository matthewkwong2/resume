import { Container, Grid, ThemeProvider, makeStyles } from '@material-ui/core';
import { Gift, Globe, Heart, HotCup } from 'components/icons';
import { createBackground, darkTheme } from 'theme';

import FactCard from './FactCard';
import React from 'react';
import bgFallback from 'assets/img/bg_fun_fact.jpg';
import bgMdFallback from 'assets/img/bg_fun_fact_md.jpg';
import bgMdWebp from 'assets/img/bg_fun_fact_md.webp';
import bgPlaceholder from 'assets/img/bg_fun_fact_placeholder.jpg';
import bgSmFallback from 'assets/img/bg_fun_fact_sm.jpg';
import bgSmWebp from 'assets/img/bg_fun_fact_sm.webp';
import bgWebp from 'assets/img/bg_fun_fact.webp';
import bgXsFallback from 'assets/img/bg_fun_fact_xs.jpg';
import bgXsWebp from 'assets/img/bg_fun_fact_xs.webp';
import data from 'constants/data';
import funFact from 'constants/funFact';
import { useInView } from 'react-intersection-observer';

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
  root: createBackground(theme, bgsWebp, bgsFallback, bgPlaceholder)
}));

const FunFact = () => {
  const classes = useStyles();
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <section ref={ref} className={classes.root}>
      <ThemeProvider theme={darkTheme}>
        <Container>
          <Grid container spacing={4} justify='center'>
            <Grid item md={3} sm={6} xs={12}>
              <FactCard
                Icon={Globe}
                title={funFact.completedCourses}
                value={data.funFact.completedCourses}
                startCountDown={inView}
              />
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
              <FactCard
                Icon={Gift}
                title={funFact.completedProjects}
                value={data.funFact.completedProjects}
                startCountDown={inView}
              />
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
              <FactCard
                Icon={Heart}
                title={funFact.happySupervisors}
                value={data.funFact.happySupervisors}
                startCountDown={inView}
              />
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
              <FactCard
                Icon={HotCup}
                title={funFact.commitment}
                value={data.funFact.commitment}
                startCountDown={inView}
              />
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </section>
  );
};

export default FunFact;