import { Container, Grid, ThemeProvider, makeStyles } from '@material-ui/core';

import FactCard from './FactCard';
import Gift from 'components/icons/Gift';
import Globe from 'components/icons/Globe';
import HotCup from 'components/icons/HotCup';
import React from 'react';
import Users from 'components/icons/Users';
import bg from 'assets/img/bg_fun_fact.jpg';
import { darkTheme } from 'theme';
import data from 'constants/data';
import funFact from 'constants/funFact';
import { useInView } from 'react-intersection-observer';

const useStyles = makeStyles({
  root: {
    background: `
    linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)),
    url(${bg})
    `,
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: darkTheme.palette.background.default
  }
});

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
                Icon={Users}
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