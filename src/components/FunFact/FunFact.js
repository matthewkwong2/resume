import {
  Container,
  Grid,
  ThemeProvider,
  fade,
  makeStyles
} from '@material-ui/core';
import { Gift, Globe, HotCup, Users } from 'components/icons';

import FactCard from './FactCard';
import React from 'react';
import bg from 'assets/img/bg_fun_fact.jpg';
import bgLg from 'assets/img/bg_fun_fact_lg.jpg';
import bgMd from 'assets/img/bg_fun_fact_md.jpg';
import bgSm from 'assets/img/bg_fun_fact_sm.jpg';
import { darkTheme } from 'theme';
import data from 'constants/data';
import funFact from 'constants/funFact';
import { useInView } from 'react-intersection-observer';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down('xs')]: {
      background: [
        `linear-gradient(${fade(theme.palette.common.black, .7)}, ${fade(theme.palette.common.black, .7)})`,
        `url(${bgSm})`
      ],
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      fallbacks: {
        background: darkTheme.palette.background.default
      }
    },
    [theme.breakpoints.up('sm')]: {
      background: [
        `linear-gradient(${fade(theme.palette.common.black, .7)}, ${fade(theme.palette.common.black, .7)})`,
        `url(${bgMd})`
      ],
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      fallbacks: {
        background: darkTheme.palette.background.default
      }
    },
    [theme.breakpoints.up('md')]: {
      background: [
        `linear-gradient(${fade(theme.palette.common.black, .7)}, ${fade(theme.palette.common.black, .7)})`,
        `url(${bgLg})`
      ],
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      fallbacks: {
        background: darkTheme.palette.background.default
      }
    },
    background: [
      `linear-gradient(${fade(theme.palette.common.black, .7)}, ${fade(theme.palette.common.black, .7)})`,
      `url(${bg})`
    ],
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    fallbacks: {
      background: darkTheme.palette.background.default
    }
  }
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