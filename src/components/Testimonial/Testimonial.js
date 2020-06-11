import {
  Container,
  ThemeProvider,
  makeStyles,
  useMediaQuery,
  useTheme
} from '@material-ui/core';
import React, { useEffect } from 'react';

import Carousel from './Carousel';
import { HexagonSlice5 } from 'mdi-material-ui'
import SectionHeader from 'components/SectionHeader';
import city from 'assets/img/city.jpg';
import { darkTheme } from 'theme';
import nav from 'constants/nav';
import testimonial from 'constants/testimonial';
import { updateCurrentSection } from 'actions'
import { useDispatch } from 'react-redux';
import { useInView } from 'react-intersection-observer';

const useStyles = makeStyles({
  root: {
    background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${city})`,
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
});

const Testimonial = () => {
  const theme = useTheme();
  const xsDown = useMediaQuery(theme.breakpoints.down('xs'));
  const [ref, inView] = useInView({ threshold: xsDown ? 0.1 : 0.5 });
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    if (inView) {
      dispatch(updateCurrentSection(nav.testimonial));
    }
  }, [dispatch, inView]);

  return (
    <section id={nav.testimonial} className={classes.root} >
      <ThemeProvider theme={darkTheme}>
        <Container ref={ref}>
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