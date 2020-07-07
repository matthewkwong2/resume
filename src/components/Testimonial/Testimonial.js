import { Container, ThemeProvider, makeStyles } from '@material-ui/core';

import Carousel from './Carousel';
import { HexagonSlice5 } from 'mdi-material-ui'
import React from 'react';
import SectionHeader from 'components/SectionHeader';
import bg from 'assets/img/bg_testimonial.jpg';
import { darkTheme } from 'theme';
import nav from 'constants/nav';
import testimonial from 'constants/testimonial';

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