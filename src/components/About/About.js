import { Container, useMediaQuery, useTheme } from '@material-ui/core';
import React, { useEffect } from 'react';

import { HexagonSlice2 } from 'mdi-material-ui'
import Languages from './Languages'
import Message from './Message';
import SectionHeader from 'components/SectionHeader';
import Skills from './Skills';
import about from 'constants/about';
import nav from 'constants/nav';
import { updateCurrentSection } from 'actions'
import { useDispatch } from 'react-redux';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const theme = useTheme();
  const xsDown = useMediaQuery(theme.breakpoints.down('xs'));
  const [ref, inView] = useInView({ threshold: xsDown ? 0.1 : 0.5 });
  const dispatch = useDispatch();

  useEffect(() => {
    if (inView) {
      dispatch(updateCurrentSection(nav.about.id));
    }
  }, [dispatch, inView]);

  return (
    <section id={nav.about.id}>
      <Container ref={ref}>
        <SectionHeader
          title={about.title}
          Icon={HexagonSlice2}
        />
        <Message />
        <Languages />
        <Skills />
      </Container>
    </section>
  );
};

export default About;