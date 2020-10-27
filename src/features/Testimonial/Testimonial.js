import { Container, ThemeProvider, makeStyles } from '@material-ui/core';
import { createBackground, darkTheme } from 'theme';

import Carousel from './Carousel';
import { HexagonSlice5 } from 'mdi-material-ui';
import SectionHeader from 'components/SectionHeader';
import bgFallback from 'assets/img/bg_testimonial.jpg';
import bgMdFallback from 'assets/img/bg_testimonial_md.jpg';
import bgMdWebp from 'assets/img/bg_testimonial_md.webp';
import bgPlaceholder from 'assets/img/bg_testimonial_placeholder.jpg';
import bgSmFallback from 'assets/img/bg_testimonial_sm.jpg';
import bgSmWebp from 'assets/img/bg_testimonial_sm.webp';
import bgWebp from 'assets/img/bg_testimonial.webp';
import bgXsFallback from 'assets/img/bg_testimonial_xs.jpg';
import bgXsWebp from 'assets/img/bg_testimonial_xs.webp';
import nav from 'constants/nav';
import testimonial from 'constants/testimonial';

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