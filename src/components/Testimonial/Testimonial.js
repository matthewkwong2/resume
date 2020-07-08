import { Container, ThemeProvider, fade, makeStyles } from '@material-ui/core';

import Carousel from './Carousel';
import { HexagonSlice5 } from 'mdi-material-ui'
import React from 'react';
import SectionHeader from 'components/SectionHeader';
import bg from 'assets/img/bg_testimonial.jpg';
import bgLg from 'assets/img/bg_testimonial_lg.jpg';
import bgMd from 'assets/img/bg_testimonial_md.jpg';
import bgSm from 'assets/img/bg_testimonial_sm.jpg';
import { darkTheme } from 'theme';
import nav from 'constants/nav';
import testimonial from 'constants/testimonial';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down('xs')]: {
      background: `
        linear-gradient(
          ${fade(theme.palette.common.black, .7)}, 
          ${fade(theme.palette.common.black, .7)}
        ),
        url(${bgSm})      
      `,
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundColor: darkTheme.palette.background.default,
    },
    [theme.breakpoints.up('sm')]: {
      background: `
        linear-gradient(
          ${fade(theme.palette.common.black, .7)}, 
          ${fade(theme.palette.common.black, .7)}
        ),
        url(${bgMd})      
      `,
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundColor: darkTheme.palette.background.default,
    },
    [theme.breakpoints.up('md')]: {
      background: `
        linear-gradient(
          ${fade(theme.palette.common.black, .7)}, 
          ${fade(theme.palette.common.black, .7)}
        ),
        url(${bgLg})      
      `,
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundColor: darkTheme.palette.background.default,
    },
    background: `
      linear-gradient(
        ${fade(theme.palette.common.black, .7)}, 
        ${fade(theme.palette.common.black, .7)}
      ),
      url(${bg})
    `,
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: darkTheme.palette.background.default
  }
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