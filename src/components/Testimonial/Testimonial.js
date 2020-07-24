import { Container, ThemeProvider, makeStyles } from '@material-ui/core';
import { createFullScreenBackground, darkTheme } from 'theme';

import Carousel from './Carousel';
import { HexagonSlice5 } from 'mdi-material-ui'
import React from 'react';
import SectionHeader from 'components/SectionHeader';
import bg from 'assets/img/bg_testimonial.jpg';
import bgMd from 'assets/img/bg_testimonial_md.jpg';
import bgPlaceholder from 'assets/img/bg_testimonial_placeholder.jpg';
import bgSm from 'assets/img/bg_testimonial_sm.jpg';
import bgXs from 'assets/img/bg_testimonial_xs.jpg';
import nav from 'constants/nav';
import testimonial from 'constants/testimonial';

const useStyles = makeStyles(theme => ({
  root: createFullScreenBackground(theme, bg, bgMd, bgSm, bgXs, bgPlaceholder)
}));

const Testimonial = () => {
  const classes = useStyles();

  return (
    <section id={nav.testimonial} className={classes.root}>
      <ThemeProvider theme={darkTheme}>
        <Container>
          <SectionHeader
            title={testimonial.title}
            Icon={HexagonSlice5}
          />
          <Carousel />
        </Container>
      </ThemeProvider>
    </section>
  );
};

export default Testimonial;